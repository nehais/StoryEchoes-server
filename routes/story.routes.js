const router = require("express").Router();
const storyModel = require("../models/Story.model");

//Add a Story
router.post("/", async (req, res) => {
  try {
    const newStory = await storyModel.create(req.body);
    console.log("Here is your new story", newStory);
    res.status(201).json(newStory);
  } catch (error) {
    console.log("Error creating story", error);
    res.status(500).json(error);
  }
});

//Get all Stories
router.get("/", async (req, res) => {
  try {
    const allStories = await storyModel.find();
    console.log("Here are your stories", allStories);
    res.status(200).json(allStories);
  } catch (error) {
    console.log("Error getting stories", error);
    res.status(500).json(error);
  }
});

//Get one Story by Id
router.get("/:id", async (req, res) => {
  try {
    const storyId = req.params.id;
    const oneStory = await storyModel.findById(storyId);
    console.log("Here is your story", oneStory);
    res.status(200).json(oneStory);
  } catch (error) {
    console.log("Error getting story", error);
    res.status(500).json(error);
  }
});

//Update one Story by Id
router.put("/:id", async (req, res) => {
  try {
    const storyId = req.params.id;
    console.log("Story ID", storyId);

    const updatedStory = await storyModel.findByIdAndUpdate(storyId, req.body);
    console.log("Here is your updated story", updatedStory);
    res.status(200).json(updatedStory);
  } catch (error) {
    console.log("Error updating story", error);
    res.status(500).json(error);
  }
});

//Delete Story
router.delete("/:id", async (req, res) => {
  try {
    const storyId = req.params.id;
    const deletedStory = await storyModel.findByIdAndDelete(storyId);
    console.log("Here is your deleted story", deletedStory);
    res.status(204).json(deletedStory);
  } catch (error) {
    console.log("Error deleting story", error);
    res.status(500).json(error);
  }
});

module.exports = router;
