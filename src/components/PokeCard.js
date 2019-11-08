import React from 'react';

const PokeCard = (props) => {
    // console.log('POKECARD PROPS: ', props.pokemon.name)
    let caughtClass;
    let caughtClass2;
    if(props.pokemon.caught){
        caughtClass='caught';
        caughtClass2='Release';
    }
    else {caughtClass = 'notCaught'; caughtClass2 = 'Catch';}
    return (
        <div className={caughtClass}>
            <h3>{props.pokemon.name}</h3>
            <p>id: {props.pokemon.id} type: {props.pokemon.type}</p>
            {/* <p>caught: {props.pokemon.caught.toString()}</p> */}
            <img src={props.pokemon.imgUrl} alt={`${props.pokemon.name}`}/>
            <br/>
            <button onClick={()=>{props.catchPokemon(props.pokemon)}}>{caughtClass2}</button>
        </div>
    )
}

export default PokeCard;