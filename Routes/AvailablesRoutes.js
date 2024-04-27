const express = require("express");
const { AddBlood, getAvailables } = require("../Controllers/AvailablesController");
const route = new express.Router();


route.post("/availables/new",AddBlood);
route.get("/availables/all",getAvailables);

module.exports = route;