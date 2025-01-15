const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema({
  user: {
    type: String,
    required: [true, "User name is required."],
    unique: true,
    lowercase: true,
    trim: true,
  },
  bookIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const User = model("User", userSchema);

module.exports = User;
