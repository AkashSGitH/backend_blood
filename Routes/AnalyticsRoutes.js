const express = require("express");
const {getAnalytics } = require("../Controllers/AnlayticsController");
const route = new express.Router();

route.get("/analytics",getAnalytics);

module.exports = route;