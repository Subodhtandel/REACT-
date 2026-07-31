import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query {
    bulbasaur: pokemon(name: "bulbasaur") {
      name
      image
    }

    charmander: pokemon(name: "charmander") {
      name
      image
    }

    squirtle: pokemon(name: "squirtle") {
      name
      image
    }
  }
`;

export const GET_PIKACHU = gql`
  query {
    pokemon(name: "pikachu") {
      name
      types
      maxHP
    }
  }
`;