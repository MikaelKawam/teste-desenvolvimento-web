import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DetailView.css";

const DetailView = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `http://localhost:5000/pokemon/${pokemonId}`
      );
      setPokemon(result.data);
    }
    fetchData();
  }, [pokemonId]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

const {
  id,
  Name,
  "Pokedex Number": pokedexNumber,
  "Img name": imgName,
  Generation,
  "Evolution Stage": evolutionStage,
  Evolved,
  FamilyID,
  "Cross Gen": crossGen,
  "Type 1": type1,
  "Type 2": type2,
  "Weather 1": weather1,
  "Weather 2": weather2,
  "STAT TOTAL": statTotal,
  ATK,
  DEF,
  STA,
  Legendary,
  Aquireable,
  Spawns,
  Regional,
  Raidable,
  Hatchable,
  Shiny,
  Nest,
  New,
  "Not-Gettable": notGettable,
  "Future Evolve": futureEvolve,
  "100% CP @ 40": cp40,
  "100% CP @ 39": cp39,
} = pokemon;

return (
  <section className="detail-view">
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon//${id}.png`}
      className="sprite-image"
      alt="sprite"
    />
    <div className="data-wrapper">
      <h1 className="data-name">
        ID: {id} {Name}
      </h1>
      <p className="data-char">Pokedex Number: {pokedexNumber}</p>
      <p className="data-char">Img name: {imgName}</p>
      <p className="data-char">Generation: {Generation}</p>
      <p className="data-char">Evolution Stage: {evolutionStage}</p>
      <p className="data-char">Evolved: {Evolved}</p>
      <p className="data-char">FamilyID: {FamilyID}</p>
      <p className="data-char">Cross Gen: {crossGen}</p>
      <p className="data-char">Type 1: {type1}</p>
      <p className="data-char">Type 2: {type2}</p>
      <p className="data-char">Weather 1: {weather1}</p>
      <p className="data-char">Weather 2: {weather2}</p>
      <p className="data-char">STAT TOTAL: {statTotal}</p>
      <p className="data-char">ATK: {ATK}</p>
      <p className="data-char">DEF: {DEF}</p>
      <p className="data-char">STA: {STA}</p>
      <p className="data-char">Legendary: {Legendary}</p>
      <p className="data-char">Aquireable: {Aquireable}</p>
      <p className="data-char">Spawns: {Spawns}</p>
      <p className="data-char">Regional: {Regional}</p>
      <p className="data-char">Raidable: {Raidable}</p>
      <p className="data-char">Hatchable: {Hatchable}</p>
      <p className="data-char">Shiny: {Shiny}</p>
      <p className="data-char">Nest: {Nest}</p>
      <p className="data-char">New: {New}</p>
      <p className="data-char">Not-Gettable: {notGettable}</p>
<p className="data-char">Future Evolve: {futureEvolve}</p>
<p className="data-char">100% CP @ 40: {cp40}</p>
<p className="data-char">100% CP @ 39: {cp39}</p>

</div>

  </section>
  );
};

export default DetailView;
