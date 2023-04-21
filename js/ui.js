// Modal
function showModal(item) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    modalTitle.empty();
    modalBody.empty();
    
    let nameElement = $("<h1>" + item.name + "</h1>");
    let imageElement = $('<img class"modal-image">');
    imageElement.attr("src", item.imageUrl);
    let heightElement = $("<p>" + "height : " + item.height + "<p>");
    let weightElement = $("<p>" + "weight : " + item.weight + "<p>");
    let types = $("<p>" + "types : " + item.types.toString().replaceAll(",", " ") + "<p>"); //converts to string to replace comma to space in between pokemon types

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(types);
};

// Search feature (filter list)

const searchPokemon = document.getElementById('search-pokemon');
searchPokemon.addEventListener('keyup', (e) => {
    const pokemonListItems = document.querySelectorAll('.card');
    e.preventDefault();
    let searchTerm = e.target.value;
    pokemonListItems.forEach(function (pokemon) {
        if (pokemon.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            pokemon.style.display = "";
        } else {
            pokemon.style.display = 'none';
        }
    });
});
