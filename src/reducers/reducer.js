// import { ADD_FEATURE, REMOVE_FEATURE} from '../actions/actions.js'


const initialState = {
    caught: 0,
    total: 151,
    loaded: false,
    status: '',
    test: 'test',
    pokemon: [],
    pokemon: {
        id: '',
        name: '',
        img: '',
    },
  };


export const reducer= (state = initialState, action) => {
    console.log('Reducer initialState: ', initialState);
    console.log('reducer firing: ', action);
    switch(action.type) {
        case '0':
            console.log(action.payload)

          return {
            
          }
        case '1':
            console.log('REMOVING FEATURE: ', action.payload);
            return {
            }
        default: return state;
  }
}