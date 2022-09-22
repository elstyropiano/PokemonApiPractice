import Description from '../description/Description'
import { S } from './SimplePokemonCard.styled'
import FightStats from '../fightStats/FightStats'
import DeleteFromArenaIcon from '../deleteFromArenaIcon/DeleteFromArenaIcon'
import { useState } from 'react'
import NewPokemonsButtons from '../newPokemonsButtons/NewPokemonsButtons'
import Context from '../../Context'
import { useContext } from 'react'

const SimplePokemonCard = ({
  newPokemon,
  arena,
  list,
  pokemonData,
  createdPokemonData,
  setCreateIsDone,
  arenaWinner,
}) => {
  const { themeColor } = useContext(Context)
  const [newPokemonImg, setNewPokemonImg] = useState(null)
  const [iconExsistInServer, setIconExsistInServer] = useState(false)

  return (
    <>
      {newPokemon && (
        <>
          <NewPokemonsButtons
            createdPokemonData={createdPokemonData}
            setCreateIsDone={setCreateIsDone}
            setNewPokemonImg={setNewPokemonImg}
            iconExsistInServer={iconExsistInServer}
            setIconExsistInServer={setIconExsistInServer}
            newPokemonImg={newPokemonImg}
          />
        </>
      )}
      <S.MainWrapper
        arenaWinner={arenaWinner}
        arena={arena}
        themeColor={themeColor}
        list={list?.toString()}
      >
        {pokemonData && (
          <>
            {'wins' in pokemonData &&
              (pokemonData.wins !== 0 || pokemonData.loses !== 0) && (
                <FightStats wins={pokemonData.wins} loses={pokemonData.loses} />
              )}
            {arena && <DeleteFromArenaIcon pokemonData={pokemonData} />}
            <S.PokemonWrapper>
              <S.ImgWrapper>
                {
                  <S.Img
                    iconExsistInServer={iconExsistInServer}
                    src={newPokemon ? newPokemonImg : pokemonData.img}
                    alt={pokemonData.name}
                  />
                }
              </S.ImgWrapper>
              <Description pokemonData={pokemonData} />
            </S.PokemonWrapper>
          </>
        )}
      </S.MainWrapper>
      {iconExsistInServer && (
        <S.PokemonExsistWarning>
          Ten Pokemon już istnieje
        </S.PokemonExsistWarning>
      )}
    </>
  )
}

export default SimplePokemonCard
