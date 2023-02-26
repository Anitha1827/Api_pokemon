// List of Ability
// https://pokeapi.co/api/v2/pokemon//

var page = 1;
var pokemonname = document.getElementById("pokemon");

var globalpokemon = [];
const getpokemonname = async () =>{
    const response  = await fetch(`https://pokeapi.co/api/v2/pokemon?page=${page}`);
    const {results: pokemon} = await response.json();
    globalpokemon = pokemon;
    pokemon.forEach(({ name }) => {
        var liEliment = document.createElement('li');
        liEliment.classList.add('list-group-item');
        var t = document.createTextNode(name);
        pokemonname.appendChild(liEliment);
        pokemonname.appendChild(t);

       
    });
    
}
getpokemonname();

var pokemonmoves = document.getElementById("moves");
globalweight = [];
const pokemons = async () =>{
const weightresponse = await fetch(`https://pokeapi.co/api/v2/move?page=${page}`);
const {results: pokemonsname} = await weightresponse.json();
globalweight = pokemonsname; 
pokemonsname.forEach(({ name }) => {
    var moves = document.createElement('li');
    moves.classList.add('list-group-item');
    var m = document.createTextNode(name);
    pokemonmoves.appendChild(moves);
    pokemonmoves.appendChild(m);
});
}
pokemons();

var pokemonability = document.getElementById("ability");
globalability = [];
const getability = async () =>{
const ability = await fetch(`https://pokeapi.co/api/v2/ability?page=${page}`);
const {results : pokemon_ability} = await ability.json();
globalability = pokemon_ability;
pokemon_ability.forEach(({ name }) => {
    var abilitys = document.createElement('li');
    abilitys.classList.add('list-group-item');
    var a = document.createTextNode(name);
    pokemonability.appendChild(abilitys);
    pokemonability.appendChild(a);
});
}
getability();

const prevPageFun = () =>{
    page++;
    getpokemonname();
    pokemons();
    getability();
}

const nextPageFun = () =>{
    page--;
    getpokemonname();
    pokemons();
    getability();
}