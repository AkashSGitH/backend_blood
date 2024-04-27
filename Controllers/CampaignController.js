const ErrorHandler = require("../Utils/ErrorHandler");
const CatchAsyncError = require('../Utils/CatchAsyncError');
const Campaigns = require("../Models/CampaignModel");

const AddCampaign = CatchAsyncError(async(req,res,next) => {
    let data = req.body;

    let newCampaign = await Campaigns.create(data);

    return res.status(201).send({
        success:true,
        campaign:newCampaign
    });
});

const GetAllCampaign = CatchAsyncError(async(req,res,next) => {
    let campaigns = await Campaigns.find({});

    return res.status(200).send({
        success:true,
        campaigns
    });
});

module.exports = {
    AddCampaign,
    GetAllCampaign
}
