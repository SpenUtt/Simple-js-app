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

/*

//submission 1
if (pokemonList.height >1.5){
    console.log(" is a big pokemon!");
    }else if (pokemonList.height >0.5 && pokemonList.height <1.5){
        console.log(" is an average sized pokemon!");
    }else {
        console.log(" is a small pokemon, how cute!")
document.write('<p>Pikachu (height 0.4) </p> ')
document.write('<p>Squirtle (height 0.5) </p> ')
document.write('<p>Charmander (height 0.6) </p> ')
document.write('<p>Jigglypuff (height 0.5) </p> ')
document.write('<p>Slowbro (height 1.6) </p> ')
document.write('<p>Breloom (height 1.2) </p> ')
}

*/

for (let i = 0; 
    i < pokemonList.length; i++) {
    if(pokemonList[i].height >= 1.5) {
            document.write(pokemonList[i].name + ' ' + 'height:\ (' + pokemonList[i].height + '\) 'Wow, that is a big pokemon! <br>');
        }
        else if (pokemonList[i].height >= 0.5 && pokemonList[i].height < 1.5){
            document.write(pokemonList[i].name + pokemonList[i].height + "Wow, that is an average sized pokemon! <br>");
        }
        else {
            document.write(pokemonList[i].name + pokemonList[i].height + "that is a small pokemon, how cute! <br>")
        }
    }