let pokemonRepository = (function () {
    let pokemonList=[];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let pokemonListElement = document.querySelector('.pokemon-list');

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon 
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }
    
    function getAll () {
        return pokemonList;
    }
    
    function addListItem(pokemon){
        pokemonRepository.loadDetails(pokemon).then(function () {
            let list = $(".list");
            let card = $('<div class="card" style=width:300px></div>');
            let cardImage = $('<img class="card-img-top" alt="Card image" style="width:50%"/>');
            cardImage.attr("src", pokemon.imageUrl);
            let cardTitle = pokemon.name;
            let cardBody = $('<div class="card-body"></div>');
            
            let detailsButton = $('<button type="button" id="pokemon-button" class="btn btn-dark" data-toggle="modal" data-target="#pokemonModal">See details</button>');
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
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
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
        let imageElement = $('<img class"modal-image" style="width:50%">');
        imageElement.attr("src", item.imageUrl);
        let heightElement = $("<p>" + "height : " + item.height + "<p>");

        modalTitle.append(nameElement);
        modalBody.append(imageElement);
        modalBody.append(heightElement);
    };

    return {
        add: add, 
        getAll: getAll, 
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
        hideModal: hideModal,
    };
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
