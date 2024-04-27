const ErrorHandler = require("../Utils/ErrorHandler");
const CatchAsyncError = require("../Utils/CatchAsyncError");
const Availables = require("../Models/AvailablesModel");

const AddBlood = CatchAsyncError(async(req,res,next) => {
    let data = req.body;

    if(!data){
        return next(new ErrorHandler("Please Enter Data !",404));
    }

    let newData = await Availables.create(data);

    if(!newData){
        return next(new ErrorHandler("Something went wrong !",400));
    }

    return res.status(201).send({
        success:true,
        data:newData
    });
}); 

const getAvailables = CatchAsyncError(async(req,res,next) => {
    let availables = await Availables.find({}).populate({
        path:"donors.donor",
        model: 'Donors'
    });

    if(!availables){
        return next(new ErrorHandler("Something went wrong !",500));
    }

    res.status(200).send({
        success:true,
        data:availables
    })
});


module.exports = {
    AddBlood,
    getAvailables
}