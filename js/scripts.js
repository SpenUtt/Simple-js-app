let pokemonRepository = (function () {
    let pokemonList=[];
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon 
        ) {
            pokemonList.push(pokemon);
        } 
    }
    
    function getAll () {
        return pokemonList;
    }
    
    function addListItem(pokemon){
        pokemonRepository.loadDetails(pokemon).then(function () {
            let list = $(".list");

            let card = $('<div></div>');
            card.addClass("card")

            let cardImage = $('<img alt="Card image"/>');
            cardImage.attr("src", pokemon.imageUrl);

            let cardTitle = pokemon.name;
            let cardBody = $('<div class="card-body"></div>');
            
            let detailsButton = $('<button type="button" id="pokemon-button">See details</button>');
            detailsButton.addClass(["btn", "btn-dark"]);
            detailsButton.attr("data-toggle", "modal");
            detailsButton.attr("data-target", "#pokemonModal");

            list.append(card);
            card.append(cardImage);
            card.append(cardTitle);
            card.append(cardBody);
            cardBody.append(detailsButton);

            detailsButton.on("click", () => {
                showDetails(pokemon);
            });
            card.on("click", () => {
                showDetails(pokemon);
            })
        })
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
   
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types.map(o => o.type.name); //function which captures array of pokemon types
            item.weight = details.weight;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon)
        });
    }
//modal
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

    return {
        add, 
        getAll, 
        addListItem,
        loadList,
        loadDetails,
        showDetails,
        showModal,
    };
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
