const express = require("express");

const app = express();

app.get("/", (req,res) => {
        res.send("welcome to nodes-microservice image app");
});

app.get("/info",(req,res) => {
        res.send("hey this is /info api");
});

app.listen(8000, () => {
        console.log("listening on 8000");
});
