// function pikachu(name) {

//     if (name === "pikachu") {
//         alert("pika pikachu !!!")
//     }
// }


function NavBar({ pokemonList, onPokemonButtonClick, pokemonName }) {

    if (pokemonName === "pikachu") {
        alert("pika pikachu !!!")
    }
    console.log(pokemonName);
    // pikachu(pokemonName)
    return (
        <div>
            <ul>
                {pokemonList.map((pokemon, index) => (
                    <button key={pokemon.name} onClick={() => onPokemonButtonClick(index)}>
                        {pokemon.name}
                    </button>
                ))}
            </ul>
        </div >
    );
}


export default NavBar;

