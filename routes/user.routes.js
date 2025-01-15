const router = require("express").Router();
const userModel = require("../models/User.model");

//Add a User
router.post("/", async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    console.log("Here is your new user", newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.log("Error creating user", error);
    res.status(500).json(error);
  }
});

//Get all Users
router.get("/", async (req, res) => {
  try {
    const allUsers = await userModel.find();
    console.log("Here are your users", allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error getting users", error);
    res.status(500).json(error);
  }
});

module.exports = router;
