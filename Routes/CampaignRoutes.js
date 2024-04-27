const express = require("express");
const { AddCampaign, GetAllCampaign } = require("../Controllers/CampaignController");
const route = new express.Router();

route.post("/campaign/add",AddCampaign);
route.get("/campaign/all",GetAllCampaign);

module.exports = route;