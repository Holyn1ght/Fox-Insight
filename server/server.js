const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const articleRoutes = require("./routes/articles");
const userRoutes = require("./routes/users");

const app = express();

// Connection to MongoDB
mongoose
  .connect("mongodb://localhost:27017/Fox-Insight", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB", error));

app.use(cors());

// Routes connecting
app.use("/articles", articleRoutes);
app.use("/users", userRoutes);
const PORT = 3300;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
