import React from 'react';


const PokeList = (props) => {

    return(
        <div>
            <p>{props.caught}/{props.total} Pokemon caught</p>
            <button>Prev</button><button>Next</button>
        </div>
    );
}

export default PokeList;