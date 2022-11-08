const express = require("express");
const app = express();
const UserModel = require("./models/users");
app.use(express.json());

// const mongoDBConnectionString = "mongodb+srv://dbUser:$Admin12009$@cluster0.roaquzy.mongodb.net/test";
const mongoDBConnectionString = "mongodb+srv://dbUser:$Admin12009$@cluster0.roaquzy.mongodb.net/merndb?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.connect(mongoDBConnectionString);

// API request handle
app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);

    await newUser.save();

    res.json(user);
});

app.listen(3001, () => {
    console.log('server is running...');
});