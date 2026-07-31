import PokemonCard from "./PokemonCard";


function PokemonList ({pokemons}){
    return(
        <div className="container">
            {pokemons.map((pokemon)=>(
            <PokemonCard
            key={pokemon.pokemon}
            pokemon={pokemon}
            />
            ))}
        </div>
    )
}

export default PokemonList