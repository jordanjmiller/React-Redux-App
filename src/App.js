import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.css';
import PokeList from './components/PokeList';
import { saveState } from './utils/localStorage';


function App(props) {

// get counts: map through each results array, then if i=0 grab first pokemon's id after pulling its data, same for last's.

  const [charmanderImg, setCharmanderImg] = useState('');

  axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => { console.log(res); 
      axios.get(res.data.results[3].url)
        .then(res => { console.log(res.data); 
          console.log(res.data.sprites.front_default);
          setCharmanderImg(res.data.sprites.front_default); })
        .catch(err => console.log(err)) })
    .catch(err => console.log(err));

  return (
    <div className="App">
      <PokeList caught={props.caught} total={props.total}/>
      <img src={charmanderImg} alt='charmander'/>
    </div>
  )
}


const mapStateToProps = state => {
  console.log('mapstatetoprops: ', state);
  // saveState(state);
  return {
    caught: state.caught,
    total: state.total,
  }
}

export default connect(mapStateToProps, {})(App)
