import React,{useState,useEffect} from 'react';

const Dex = ({showDex}) => {
    const [state,setState] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => {setState({pokemon: response.results})})
    }, []);
    if (showDex === true) {
        return (
            <div>
                {state.pokemon ? state.pokemon.map((species,number) => <h1 key = {number}>{species.name}</h1>) 
                :null}
            </div>
        );
    } else {
        return null;
    }
};



export default Dex;
