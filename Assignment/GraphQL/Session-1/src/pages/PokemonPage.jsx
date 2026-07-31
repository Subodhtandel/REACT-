import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { GET_POKEMONS } from "../graphql/queries"
import PokemonCard from "../components/PokemonCard"

function PokemonPage(){
    const {data,loading,error}=useQuery(GET_POKEMONS)

    if (loading) return <h2>Loading....</h2>
    if (error) return <h2>Error:{error.message}</h2>

    const pokemons=[
        data.bulbasaur,
        data.charmander,
        data.squirtle
    ]

    return(
        <div>
            <h1>Pokemon List</h1>
            {pokemons.map((pokemon)=>(
                <PokemonCard
                key={pokemon.name}
                pokemon={pokemon}
                />
            ))}
        </div>
    )
}
export default PokemonPage