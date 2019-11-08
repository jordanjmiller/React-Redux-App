
import axios from 'axios';

export const LOAD_ALL_POKEMON = 'LOAD_ALL_POKEMON'; //action type
export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAIL = 'FETCH_POKEMON_FAIL';
export const FETCH_POKEMON_COMPLETED = 'FETCH_POKEMON_COMPLETED';


export const loadAllPokemon = () => {
// dispatch an action here to add an item
    console.log('loadAllPokemon firing');
    return{ //action
        type: LOAD_ALL_POKEMON,
        payload: null
    }
};

export const getPokemon = () => dispatch => {
    console.log('getPokemon firing');
    dispatch({ type: FETCH_POKEMON_START, payload: null });
    for (let i = 1; i < 152; i++){
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res =>{
            console.log('axios: fetched: ', i, res.data.name);
            let pokemon = {
                id: res.data.id,
                name: res.data.name,
                type: res.data.types[0].type.name,
                imgUrl: res.data.sprites.front_default,
                caught: false,
            };
        dispatch({ type: FETCH_POKEMON_SUCCESS, payload: pokemon })
        })
        .catch(err => {dispatch({ type: FETCH_POKEMON_FAIL, payload: err }); console.log('CATCH ERROR ON: ', i) });
    }
};

export const checkComplete = () => {
        return { type: FETCH_POKEMON_COMPLETED, payload: null} ;
}

// catch/release toggle button on all pokemans, open/closed pokeball from caught true/false