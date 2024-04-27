const mongoose = require("mongoose");

const AvailablesSchema = new mongoose.Schema({
    blood_group:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    count:{
        type:Number,
        default:0
    },
    donors: [
        {
            donor: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Donor"
            }
        }
    ]
});

const AvailablesModel = new mongoose.model("availables",AvailablesSchema);

module.exports = AvailablesModel;