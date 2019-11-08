import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.css';
import PokeList from './components/PokeList';
import { getPokemon, checkComplete, updateCount, displayToggle } from './actions/actions';
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

    const caughtCount = props.pokemon.reduce((count, poke) => { 
      if (poke.caught){
        return (count + 1);
      }
      else {return count}
    }, 0);
    if (props.caught !== caughtCount)
    {
      props.updateCount(caughtCount);
    }

    const changeFilterType = () => {
      switch(props.filterType){
        case 'Display All':
          console.log('changeFilterType: Display All firing');
          props.displayToggle('Display Caught');
          return null;
        case 'Display Caught':
            console.log('changeFilterType: Display Caught firing');
            props.displayToggle('Display Uncaught');
          return null;
        case 'Display Uncaught':
            console.log('changeFilterType: Display Uncaught firing');
            props.displayToggle('Display All');
            return null;
        default: console.log('changeFilterType Error: Default case reached');
      }
    }


  return (
    <div className="App">
      <div className='header'>
        <p>{props.caught}/{props.total} Pokemon caught</p>
        <button onClick={changeFilterType}>Filter by: {props.filterType}</button>
      </div>
      <div>
        {(()=>{if (props.caught === props.total){
          return <h1>You did it!!!</h1>
        }})()}
        </div>
      
      {/* <button>Prev</button><button>Next</button> */}
      <PokeList filterType={props.filterType} pokemon={props.pokemon}/>
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
    filterType: state.filterType,
    pokemon: state.pokemon,
    isFetching: state.isFetching,
  }
}

export default connect(mapStateToProps, { getPokemon, checkComplete, updateCount, displayToggle })(App)
