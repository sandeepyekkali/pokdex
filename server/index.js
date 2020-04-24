const express = require('express')
const graphqlHTTP = require('express-graphql')
const pokemonschema = require('./models/pokemonschema')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/gql',graphqlHTTP({
    schema: pokemonschema,
    graphiql: true
}))

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Pokedex serving on ${PORT}`)
})