import React, {useState} from 'react'
import {useQuery} from '@apollo/react-hooks' 
import {pokemons} from '../queries/queries' 


function SearchBar({onCurrentChange}){

    const [CurrentPokemon, setCurrentPokemon] = useState(' ')
    const searchRows = []
    

     const pokemonList = useQuery(pokemons)
     console.log(pokemonList)
    
    
     if(!pokemonList.loading){
        pokemonList.data.pokemons.forEach((pokemon)=>{
            if(pokemon.species.indexOf(CurrentPokemon)=== -1){return null}
            searchRows.push(
                <li>{pokemon.species}</li>
            )
         })
     }

     const handleSubmit=(e)=>{
       e.preventDefault()
       onCurrentChange(CurrentPokemon)
     }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                <label for="search">Search Pokemon</label>
                <input type="text" autoComplete='off' className="form-control" id='search' 
                 value={CurrentPokemon}
                 onChange={(e)=> setCurrentPokemon(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-primary'>Search</button>
            </form>
            <div>
              <ul>{searchRows}</ul>
            </div>
        </div>
    )
}

export default SearchBar