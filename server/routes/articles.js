const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

// Routes connected with articles

// Get all articles with author names
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find().populate("author_info", "username");
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error articles route" });
  }
});

// Get article by _id with author name
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id).populate(
      "author_info",
      "username",
    );

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error article route" });
  }
});

router.post("/", async (req, res) => {
  const { title, description, body } = req.body;
  const author_info = "64f6fa65fcd6806bf640161c"; // temporary data until Auth0

  try {
    const newArticle = new Article({
      title,
      description,
      body,
      date: new Date(),
      author_info,
    });
    const savedArticle = await newArticle.save();
    console.log("New article:", savedArticle);
    res.json(savedArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error when adding article" });
  }
});

module.exports = router;
