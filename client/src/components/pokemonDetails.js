import React from 'react'
import {useQuery} from '@apollo/react-hooks' 
import {pokemondetails} from '../queries/queries' 


function PokemonDetails({current}) {

    console.log("current" +current)

   const details = useQuery(pokemondetails,{
       skip: !current,
       variables: {id:current}
    })
    console.log(details)

    return (
        <div>
            {details.loading && <p>loading..</p>}
            {!details.loading && current &&
             <div>
               <h3>{details.data.pokemon.species}</h3>
               <img alt="" src={details.data.pokemon.sprites}/>
               <ul className="list-group list-group-horizontal">
                {details.data.pokemon.abilities.map(ability=>{
                  return <li className="list-group-item">{ability.name}</li> 
                })}
               </ul>
             </div>}
        </div>
    )
}

export default PokemonDetails
