const express = require("express")
const route = new express.Router();

const {RegisterDonor, LoginDonor} = require("../Controllers/DonorController");

/**** REGISTER DONOR */
route.post("/donor/register",RegisterDonor);
route.post("/donor/login",LoginDonor);

module.exports = route;