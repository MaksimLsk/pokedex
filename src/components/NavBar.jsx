
function NavBar({ handleClickPrevious, handleClickNext }) {

    return (
        <div>
            <button onClick={handleClickPrevious}>Précédent</button>
            <button onClick={handleClickNext}>Suivant</button>
        </div>
    );
}


export default NavBar;