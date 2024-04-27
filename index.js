require("dotenv").config({path:"./Config/dev.env"});
const app = require("./app");

app.listen(process.env.PORT,(err) => {
    if(err) return err;

    console.log(`Successfully lissten on port no : ${process.env.PORT}`);
})