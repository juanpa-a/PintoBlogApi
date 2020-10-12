import express from "express";
import Recipe from "./model"

const post_router = express.Router();

post_router.post("/post/create", ({ body: { name, content, date } }, res) => {
  const recipe = new Recipe({
    name: name,
    content: content,
  });
  recipe.save((err) => {
    if (err) console.log("Error:", err);
    else console.log("Succesfully saved recipe");
  });
  res.send(recipe);
});

post_router.get("/post", (_, res) => {
  Recipe.find({}, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

post_router.get("/post/:id", ({ params: { id } }, res) => {
  Recipe.findById(id, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

module.exports = post_router