import React, { Component } from "react";
import "./App.css";
import { PokeList, DetailView } from "./components";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {
        id: 1,
        Name: "Bulbasaur",
        Type1: "grass",
        Type2: "poison",
        ATK: 118,
        DEF: 118,
        STA: 90,
        Legendary: 0,
        Shiny: 0,
      },
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    axios
      .get(`http://localhost:5000/pokemon/${id}`)
      .then((response) => {
        const data = response.data;
        const pokemon = {
          id: data.id,
          Name: data.Name,
          Type1: data["Type 1"],
          Type2: data["Type 2"],
          ATK: data.ATK,
          DEF: data.DEF,
          STA: data.STA,
          Legendary: data.Legendary,
          Shiny: data.Shiny,
        };
        this.setState({ pokemon });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemonId={this.state.pokemon.id} />
      </div>
    );
  }
}

export default App;
