import { FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAIL, FETCH_POKEMON_COMPLETED, CATCH_POKEMON, UPDATE_COUNT,
    DISPLAY_TOGGLE } from '../actions/actions.js';

const initialState = {
    caught: 0,
    total: 151,
    loaded: false,
    isFetching: false,
    filterType: 'Display All',
    pokemon: [],
  };


export const reducer = (state = initialState, action) => {
    //console.log('Reducer initialState: ', initialState);
    //console.log('reducer firing: ', action);
    switch(action.type) {
        case FETCH_POKEMON_START:
            //console.log('FETCH_POKEMON_START', state);
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_POKEMON_SUCCESS:
            //console.log('FETCH_POKEMON_SUCCESS', state);
            let unsortedArray = [...state.pokemon, action.payload];
            let sortedArray = unsortedArray.sort((a, b)=> {return a.id-b.id;});
            return {
                ...state,
                pokemon: sortedArray,
            };
        case FETCH_POKEMON_FAIL:
            //console.log('FETCH_POKEMON_FAIL: ERROR: ', action.payload);
            return {
                ...state,
                error: action.payload
            };
        case FETCH_POKEMON_COMPLETED:
            //console.log('FETCH_POKEMON_COMPLETED', state);
            return {
                ...state,
                isFetching: false,
                loaded: true,
                error: ''
            };
        case CATCH_POKEMON:{
            //console.log('reducer CATCH_POKEMON firing')
            let filteredArray = state.pokemon.filter(poke => {return poke.id !== action.payload.id});
            action.payload.caught = !action.payload.caught;
            let unsortedArray = [...filteredArray, action.payload];
            let sortedArray = unsortedArray.sort((a, b)=> {return a.id-b.id;});
            return {
                ...state,
                pokemon: [...sortedArray],
            };
        }
        case UPDATE_COUNT:{
            //console.log('reducer UPDATE_COUNT firing');
            return{
                ...state,
                caught: action.payload,
            }
        }
        case DISPLAY_TOGGLE:{
            //console.log('DISPLAY_TOGGLE TO: ', action.payload);
            return{
                ...state,
                filterType: action.payload,
            }
        }
        default: //console.log('REDUCER DEFAULT'); 
        return state;
  }
}