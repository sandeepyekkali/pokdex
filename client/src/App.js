import React,{useState} from 'react';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'
import SearchBar from './components/searchbar'
import PokemonDetails from './components/pokemonDetails';
import Navbar from './components/navbar';

const client = new ApolloClient({
  uri: 'http://localhost:4000/gql'
})

function App() {

  const [current, setcurrent] = useState('')
  const handleCurrentChange=(id)=>{
      setcurrent(id)
  }

  return (
    <ApolloProvider client={client}>
      <Navbar></Navbar>
      <div className="container" style={{paddingTop:25}}>
        <div className="row">
        <div className='col-6'><SearchBar onCurrentChange={handleCurrentChange}/></div>
        <div className='col-6'><PokemonDetails current={current}/></div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
