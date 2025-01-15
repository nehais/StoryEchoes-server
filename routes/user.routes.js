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

//Update one User by Id
router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("User ID", userId);

    const updatedUser = await userModel.findByIdAndUpdate(userId, req.body);
    console.log("Here is your updated user", updatedUser);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Error updating user", error);
    res.status(500).json(error);
  }
});

module.exports = router;
