const ErrorHandler = require("../Utils/ErrorHandler");
const CatchAsyncError = require("../Utils/CatchAsyncError");
const Availables = require("../Models/AvailablesModel");
const DonorModel = require("../Models/DonorModel");
const Campaigns = require("../Models/CampaignModel");

const getAnalytics = CatchAsyncError(async(req,res,next) => {

    let availables = await Availables.find({});

    let total_registerd_donors = await DonorModel.find({});

    let current_campaigns = await Campaigns.find({});

    return res.status(200).send({
        availables,
        total_registerd_donors:total_registerd_donors.length,
        current_campaigns:current_campaigns.length
    });
    
});

module.exports = {
    getAnalytics
}
