const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// Solve CORS
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://mikaelkawam:68908730mk@pokemon.4qjx98u.mongodb.net/pokemon",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// Define the Pokemon schema
const pokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  pokedexNumber: String,
  imgName: String,
  generation: String,
  evolutionStage: String,
  evolved: String,
  familyID: String,
  crossGen: String,
  type1: String,
  type2: String,
  weather1: String,
  weather2: String,
  statTotal: String,
  ATK: String,
  DEF: String,
  STA: String,
  legendary: String,
  aquireable: String,
  spawns: String,
  regional: String,
  raidable: String,
  hatchable: String,
  shiny: String,
  nest: String,
  new: String,
  notGettable: String,
  futureEvolve: String,
  cp40: String,
  cp39: String,
});

// Create the Pokemon model
const Pokemon = mongoose.model("Pokemon", pokemonSchema, "pokemon");

// Define the GET route to get all Pokemon
app.get("/pokemon", async (req, res) => {
  const pokemon = await Pokemon.find();
  res.json(pokemon);
});

// Define the GET route to get a specific Pokemon by id number
app.get("/pokemon/:idNumber", async (req, res) => {
  const idNumber = parseInt(req.params.idNumber);
  console.log(`Searching for Pokémon with id number ${idNumber}...`);
  const pokemon = await Pokemon.findOne({ id: idNumber });
  console.log(pokemon);
  res.json(pokemon);
});



// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
