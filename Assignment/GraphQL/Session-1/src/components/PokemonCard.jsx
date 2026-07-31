function PokemonCard({pokemon}){
    return(
        <div>
            <img src={pokemon.image} alt={pokemon.name} width="150"/>
            <h3>{pokemon.name}</h3>
        </div>
    )
}

export default PokemonCard