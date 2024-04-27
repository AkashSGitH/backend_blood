const ErrorHandler = require("../Utils/ErrorHandler");
const CatchAsyncError = require("../Utils/CatchAsyncError");
const Donor = require("../Models/DonorModel");
const bcrypt = require("bcryptjs");
const Availables = require("../Models/AvailablesModel");

const RegisterDonor = CatchAsyncError(async (req, res, next) => {
  let data = req.body;

  if (!data) {
    return next(new ErrorHandler("Please provide data !", 404));
  }

  const newDonor = await Donor.create(data);

  let availableDocument = await Availables.findOne({blood_group:newDonor.blood_group});

  if(!availableDocument){
    return next(new ErrorHandler("Blood group is not exist , try different or exist one !",404));
  }

  availableDocument.count = availableDocument.count + 1;

  availableDocument.donors = availableDocument.donors.concat({donor:newDonor._id});

  await availableDocument.save();
  
  if (!newDonor) {
    return next(
      new ErrorHandler(
        "Something went wrong !, Please try to provide some valid information !",
        400
      )
    );
  }

  return res.status(201).send({
    success: true,
    data: newDonor,
  });
});

const LoginDonor = CatchAsyncError(async (req, res, next) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email And Password !", 400));
  }

  // check user exists or not!
  let isExist = await Donor.findOne({ email: email });

  if (!isExist) {
    return next(new ErrorHandler("Entered Email is not exist !", 404));
  }

  let isValidPassword = await bcrypt.compare(password, isExist.password);

  if (!isValidPassword) {
    return next(new ErrorHandler("Password is wrong !", 404));
  }

  /* Store Email and password in cookie */
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 15); // Set 

  res.cookie("user", isExist, {
    expires: expiryDate,
    httpOnly: true
  });

  return res.status(200).json({
    success: true,
    donor: isExist,
  });
});

module.exports = {
  RegisterDonor,
  LoginDonor,
};
