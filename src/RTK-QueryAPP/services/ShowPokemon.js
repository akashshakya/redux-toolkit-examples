import React from 'react'
import { useGetPokemonByNameQuery } from './pokemon'

export default function ShowPokemon() {

    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

    return (
        <div className="App">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>
  
  )
}
