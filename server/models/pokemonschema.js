const graphql = require('graphql')
const axios = require('axios')

const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema} = graphql

const pokemonType = new GraphQLObjectType({
    name: 'pokemon',
    fields: ()=>({
        id: {type: GraphQLID},
        species: {type: GraphQLString},
        sprites: {type: GraphQLString},
        abilities: {type: GraphQLList(abilitiesType)}
    })
})

const abilitiesType = new GraphQLObjectType({
    name: 'ability',
    fields: ()=>({
        name: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
   name: 'RootQuery',
   fields:{
     pokemon:{
         type: pokemonType,
         args: {id:{type: GraphQLID}},
         async resolve(parent,args){
            let x 
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${args.id}`)
            .then(({data})=>{
                x= {id:data.id, 
                    species: data.species.name,
                    sprites: data.sprites.front_default,
                    abilities: data.abilities.map(abilityx=>{return {name: abilityx.ability.name}})
            }})
            return x
         }
     },
     pokemons:{
         type: GraphQLList(pokemonType),
         resolve(parent,args){
             return axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40')
             .then(({data})=>{
                 return data.results.map(result=>{return{species: result.name}})
             })
         }
     }
   }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})