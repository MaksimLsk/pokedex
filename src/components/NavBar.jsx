
function NavBar({ pokemonList, onPokemonButtonClick }) {

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

