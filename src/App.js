import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.css';
import PokeList from './components/PokeList';
import { getPokemon, checkComplete } from './actions/actions';
import { loadState, saveState } from './utils/localStorage.js';


function App(props) {

// get counts: map through each results array, then if i=0 grab first pokemon's id after pulling its data, same for last's.

  const [charmanderImg, setCharmanderImg] = useState('');

  axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => { //console.log(res); 
      axios.get(res.data.results[3].url)
        .then(res => { //console.log(res.data); 
          // console.log(res.data.sprites.front_default);
          setCharmanderImg(res.data.sprites.front_default); })
        .catch(err => console.log(err)) })
    .catch(err => console.log(err));

    if (props.loaded === false && props.isFetching === false){
      props.getPokemon();
    }

    if (props.isFetching && props.pokemon.length === 151){
      props.checkComplete();
    }

  return (
    <div className="App">
      <p>{props.caught}/{props.total} Pokemon caught</p>
      <button>Prev</button><button>Next</button>
      <PokeList pokemon={props.pokemon}/>
    </div>
  )
}


const mapStateToProps = state => {
  console.log('mapstatetoprops: ', state);
  let persistedState = loadState();
  if (!persistedState){
    saveState(state);
  }
  return {
    caught: state.caught,
    total: state.total,
    loaded: state.loaded,
    pokemon: state.pokemon,
    isFetching: state.isFetching,
  }
}

export default connect(mapStateToProps, { getPokemon, checkComplete })(App)
