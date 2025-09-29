import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        reqiuire: true,
      },
    ],

    post: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        require: true,
      },
    ],

    content: {
      type: String,
      required: true,
      maxlength: 280,
    },
    like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
