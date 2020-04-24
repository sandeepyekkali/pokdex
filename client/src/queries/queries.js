import {gql} from 'apollo-boost'

const pokemons = gql`{
    pokemons{
        species
    }
}`

export {pokemons}