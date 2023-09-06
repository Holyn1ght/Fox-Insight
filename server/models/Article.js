const { Schema, model } = require("mongoose");

const articleSchema = new Schema({
  title: String,
  description: String,
  body: String,
  date: Date,
  author_info: { type: Schema.Types.ObjectId, ref: "User" },
});

const Article = model("Articles", articleSchema);
module.exports = Article;