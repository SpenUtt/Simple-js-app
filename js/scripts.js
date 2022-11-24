//Array list

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

for (let i = 0; i < pokemonList.length; i++) {
    if(pokemonList[i].height >= 1.5) {
        document.write(pokemonList[i].name + ' ' + 'height:\(' + pokemonList[i].height + '\) ' + ' Wow, that is a big pokemon! <br>');
    }
    else if (pokemonList[i].height >= 0.5 && pokemonList[i].height < 1.5){
        document.write(pokemonList[i].name + ' ' + 'height:\(' + pokemonList[i].height + '\) ' + ' That pokemon is an average size. <br>');
    }
    else {
        document.write(pokemonList[i].name + ' ' + 'height:\(' + pokemonList[i].height + '\) ' + ' That is a small pokemon, how cute! <br>');
    }
}