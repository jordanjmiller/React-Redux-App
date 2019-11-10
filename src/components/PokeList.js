import React from 'react';
import PokeCard from './PokeCard';
import { connect } from 'react-redux';
import { catchPokemon } from '../actions/actions.js';  


const PokeList = (props) => {
    //console.log('PokeList Props: ', props)
    return(
        <div className='pokeList'>
            {/* {props.pokemon && props.pokemon.map((poke) => {return <PokeCard key={poke.id} pokemon={poke} catchPokemon={props.catchPokemon}/>})} */}
            {(()=>{
                    if(props.pokemon && props.filterType === 'Display All'){
                        // console.log('display all');
                        return props.pokemon.map((poke) => {return <PokeCard key={poke.id} pokemon={poke} catchPokemon={props.catchPokemon}/>});
                    }
                    else if(props.filterType === 'Display Caught'){
                        // console.log('display caught')
                        return props.pokemon.map((poke) => {
                            if (poke.caught){
                                return <PokeCard key={poke.id} pokemon={poke} catchPokemon={props.catchPokemon}/>}
                            else { return null; }
                    });
                    }
                    else if(props.filterType === 'Display Uncaught'){
                        // console.log('display uncaught')
                        return props.pokemon.map((poke) => {
                            if (!poke.caught){
                                return <PokeCard key={poke.id} pokemon={poke} catchPokemon={props.catchPokemon}/>}
                            else { return null; }
                            });
                    } 
            })()}
        </div>
    );
}

export default connect(null, { catchPokemon })(PokeList)