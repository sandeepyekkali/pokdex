import {gql} from 'apollo-boost'

const pokemons = gql`{
    pokemons{
        species
    }
}`

const pokemondetails = gql`
query($id:ID){
    pokemon(id:$id){
      species
      sprites
      tp
      stats{
        base_stat
      }
      abilities{
          name
      }
    }
  }`

export {pokemons, pokemondetails}