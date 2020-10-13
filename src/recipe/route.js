import express from "express";
import Recipe from "./model";

const recipe_router = express.Router();

recipe_router.post(
  "/recipe/create",
  (
    { body: { name, thumbnail, ingredients, description, steps, notes } },
    res
  ) => {
    const recipe = new Recipe({
      name: name,
      thumbnail: thumbnail,
      description: description,
      ingredients: ingredients,
      steps: steps,
      notes: notes,
    });
    recipe.save((err) => {
      if (err) console.log("Error:", err);
      else console.log("Succesfully saved recipe");
    });
    res.send(recipe);
  }
);

recipe_router.get("/recipe", (_, res) => {
  Recipe.find({}, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

recipe_router.get("/recipe/:id", ({ params: { id } }, res) => {
  Recipe.findById(id, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

module.exports = recipe_router;
