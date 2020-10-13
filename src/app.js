// Libraries
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
// Routers
import recipe_router from "./recipe/route";
// Express config
const app = express();
const PORT = process.env.PORT || 9000;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(recipe_router);

// Database connection
const connect_to_db = () => {
  // mongoose.connect(`mongodb://localhost/${DB}`, {
  mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.afcrk.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

mongoose.connection
  .once("open", () =>
    console.log(`🐃🐃🐃🐃🐃 Connected to database!!!! 🐃🐃🐃🐃🐃\n`)
  )
  .on("error", (err) => console.log("Error connecting to database", err));

// Root (hello world endpoint)
app.get("/", (_, res) => {
  res.send("Welcome to PintoBlog");
});

// Run server!! 😁
app.listen(PORT, () => {
  connect_to_db();
  console.log(
    `------------------- Happy Hacking!! -------------------\n🚀🚀🚀 Server running at http://localhost:${PORT} 🚀🚀🚀`
  );
});

// Made with love by juanpa-a 💜💜💜
