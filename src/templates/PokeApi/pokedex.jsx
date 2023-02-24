
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { PokeCard } from '../../components/PokeApi/PokeCard';
import './pokedex.css';
import pikachu from '../../images/PokeApi/pikachu.png'



export const Pokedex = () =>{
  const [pokemons , setPokemons] = useState([]);
  const [qttPokemon, setQttPokemon] = useState(50);


  const searchPokemon = (name) =>{
    const FilteredPokemons = [];
    var i = 1
    if(name !== ""){
      for(i  in pokemons){
      if(pokemons[i].data.name.includes(name)){
       FilteredPokemons.push(pokemons[i])
      } 
    }
  }
    if(name ===""){
      console.log('to aqui')
      getPokemons();
    }
    setPokemons(FilteredPokemons);
  }
  

  const getPokemons = useCallback(() =>{
    var endpoints = [];
    console.log('passei no getpokemons')
    if(qttPokemon<=1008){
      for (var i = 1 ;i<=qttPokemon; i++){
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      }
      var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res)=>setPokemons(res));
      return response;
    }
    else{
      for (var u = 1 ;u<=1008; u++){
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${u}/`)
      }
      var response1 = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res)=>setPokemons(res));
      return response1;
    }
    

  },[qttPokemon])

  useEffect(()=>{
    getPokemons();
  },[qttPokemon , getPokemons])

  return(
      <div className='pokeContainer'>
        <div className='pokeMenu'>
          <img src={pikachu} alt="pikachu"/>
        <div className="pokeInput">
          <input type='text' placeholder='Procurar' onChange={(e) => searchPokemon(e.target.value)}></input>
          <input type='number' max={1008} placeholder='quantidade de pokemons' onChange={(e)=> setQttPokemon(e.target.value)}/>
        </div>
        </div>  

        <div className='pokeGrid'>
       {pokemons.map((pokemon)=>(<PokeCard key={pokemon.data.id} pokemon={pokemon} />))}
       </div>
        </div>
  );
}
