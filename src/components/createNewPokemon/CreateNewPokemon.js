import { S } from './CreateNewPokemon.styled'
import { useContext } from 'react'
import Context from '../../Context'
import SimplePokemonCard from '../simplePokemonCard/SimplePokemonCard'

const CreateNewPokemon = ({ createdPokemonData }) => {
  const { themeColor } = useContext(Context)
  return (
    <>
      <S.ChosePokemonIconText
        color={themeColor === 'dark' ? 'loginButtonDark' : 'loginButtonColor'}
      >
        Dobierz ikone Pokemona
      </S.ChosePokemonIconText>
      <SimplePokemonCard
        newPokemon
        pokemonData={createdPokemonData}
        createdPokemonData={createdPokemonData}
      />
    </>
  )
}

export default CreateNewPokemon
