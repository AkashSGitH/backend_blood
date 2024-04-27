const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bloodsapp").then((msg) => {
    console.log("Succesfully connected !")
}).catch((err) => console.log(err))