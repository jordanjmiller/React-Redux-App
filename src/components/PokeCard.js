import React from 'react';

const PokeCard = (props) => {
    // console.log('POKECARD PROPS: ', props.pokemon.name)
    return (
        <div className='pokeCard'>
            <h3>{props.pokemon.name}</h3>
            <p>id: {props.pokemon.id} type: {props.pokemon.type}</p>
            <p>caught: {props.pokemon.caught.toString()}</p>
            <img src={props.pokemon.imgUrl} alt={`${props.pokemon.name}`}/>
        </div>
    )
}

export default PokeCard;