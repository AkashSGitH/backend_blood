require("./Connection/connect");
const express = require("express");
const app = express();
const Err = require("./Middlewares/Err");
const CookieParser = require("cookie-parser");
// Importing all routes
const DonorRoutes = require("./Routes/DonorRoutes");
const AvailablesRoutes = require("./Routes/AvailablesRoutes");
const CampaignRoutes = require("./Routes/CampaignRoutes");
const AnalyticsRoutes = require("./Routes/AnalyticsRoutes");

//Middlewares
app.use(express.json());
app.use(CookieParser());
app.use(DonorRoutes);
app.use(AvailablesRoutes);
app.use(CampaignRoutes);
app.use(AnalyticsRoutes)

app.use(Err);

module.exports = app;
