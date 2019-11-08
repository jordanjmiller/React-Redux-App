import React from 'react';
import PokeCard from './PokeCard';


const PokeList = (props) => {
    console.log('PokeList Props: ', props)
    return(
        <div className='pokeList'>
            {props.pokemon && props.pokemon.map((poke) => {return <PokeCard key={poke.id} pokemon={poke}/>})}
        </div>
    );
}

export default PokeList;