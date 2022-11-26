let pokemonRepository = (function () {

    let pokemonList=[
    {
        name: 'Pikachu', 
        types: ['electric'], 
        height: 0.4
    }, 
    {
        name: 'Squirtle', 
        types: ['water'], 
        height: 0.5
    },
    {
        name: 'Charmander', 
        types: ['fire'], 
        height: 0.6
    },
    {
        name: 'Jigglypuff', 
        types: ['fairy', 'normal'], 
        height: 0.5
    },
    {
        name: 'Slowbro',
        types: ['psychic', 'water'],
        height: 1.6
    },
    {
        name: 'Breloom',
        types: ['grass', 'fighting'],
        height: 1.2
    }
    ];

    function getAll () {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add,
    };   
})()

pokemonRepository.getAll().forEach(function(pokemon){
    if(pokemon.height > 1.5){
        document.write(pokemon.name + ' (height: '+ pokemon.height + ') - Wow, this is a large Pokemon!' + '<br>')
    }
    else {
        document.write(pokemon.name + ' (height: '+ pokemon.height + ') <br>');
    }
})

