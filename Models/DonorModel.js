const mongoose = require("mongoose")
const validator = require("validator");
const bcrypt = require("bcryptjs");

const DonorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        validate:(value) => {
            if(value < 16){
                return new Error("AGE should be greater than 16");
            }
        }
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female","Other"]
    },
    father_name:{
        type:String,
        required:true,
        trim:true
    },
    mobile:{
        type:Number,
        required:true,
        validate:(value) => {
            if(!validator.isMobilePhone(value.toString(),['en-IN'])){
                return new Error("mobile is not in correct format !");
            }
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate:(value)  => {
            if(!validator.isEmail(value)){
                return new Error("Email is not in correct format !")
            }
        }
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    address:{
        type:String,
        trim:true
    },
    blood_group:{
        type:String,
        required:true,
        trim:true
    },
    pincode:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate:(value) => {
            if(!validator.isStrongPassword(value,{minLength:8,minNumbers:1,minSymbols:1,minUppercase:1,minLowercase:1})){
                return new Error("Password should contains min length : 8, min number:1 , minsybmols:1, min uppercase letter:1, min lowercase letter:1");
            }
        }
    }
});

DonorSchema.pre("save", async function (next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,10)
    }

    next();
})

const DonorModel = new mongoose.model("Donors",DonorSchema);

module.exports = DonorModel;