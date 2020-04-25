import React from 'react'
import {useQuery} from '@apollo/react-hooks' 
import {pokemondetails} from '../queries/queries' 
import {getBg} from '../middleware/assignTypeBg'
import Plot from './plot'


function PokemonDetails({current}) {

    console.log("current" +current)

   const details = useQuery(pokemondetails,{
       skip: !current,
       variables: {id:current}
    })
    console.log(details)

    let bg = 'primary'

    if(!details.loading && current){bg = getBg(details.data.pokemon.tp)}

    return (
        <div>
            {details.loading && <p>loading..</p>}
            {!details.loading && current &&
             <div>
               <h3>{details.data.pokemon.species}</h3>
               <img alt="" src={details.data.pokemon.sprites}/>
               <h4>Type</h4><div className={`bg-${bg}`} style={{border:5,height:30, width:30,borderRadius:7}}></div>
               <br></br>
               <h4>Abilities</h4>
               <ul className="list-group list-group-horizontal">
                {details.data.pokemon.abilities.map(ability=>{
                  return <li className="list-group-item">{ability.name}</li> 
                })}
               </ul>
               <Plot></Plot>
             </div>}
        </div>
    )
}

export default PokemonDetails
