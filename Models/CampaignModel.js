const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    date:{
        type:Date,
        requiured:true,
    },
    location:{
        type:String,
        trim:true
    },
    tagline:{
        type:String,
        required:true,
    }
});

const CampaignModel = new mongoose.model("Campaigns",CampaignSchema);

module.exports = CampaignModel;