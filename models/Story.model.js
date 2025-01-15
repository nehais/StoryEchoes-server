const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const storySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  front_cover: {
    type: String,
    required: true,
  },
  staticBook: {
    type: Boolean,
  },
  content: [
    {
      page: {
        type: Number,
        required: true,
      },
      text: {
        type: String,
        required: true,
        trim: true,
      },
      image: {
        type: String,
        required: true,
      },
      mediaUrl: {
        type: String,
      },
    },
  ],
  readCount: {
    type: Number,
    default: 0,
  },
});

const Story = model("Story", storySchema);

module.exports = Story;
