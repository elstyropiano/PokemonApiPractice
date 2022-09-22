import { useContext, useEffect, useState } from 'react'
import Context from '../../Context'
import SimplePokemonCard from '../../components/simplePokemonCard/SimplePokemonCard'
import pokeball from '../../images/pokeball.png'
import BackHomeButton from '../../components/backHomeButton/BackHomeButton'
import { S } from './Arena.styled'
import axios from 'axios'
import { useTheme } from '@mui/material'
import FightButton from '../../components/fightButton/FightButton'
import { useNavigate } from 'react-router-dom'
import ArenaSummary from '../../components/arenaSummary/ArenaSummary'

const Arena = () => {
  const { themeColor } = useContext(Context)
  const [draw, setDraw] = useState(false)
  const [arenaFinish, setArenaFinish] = useState(false)
  const [winnerData, setWinnerData] = useState(null)
  const [loserData, setLoserData] = useState(null)

  const navigate = useNavigate()
  const {
    statsFromJsonServer,
    arenaMembers,
    setStatsFromJsonServer,
    setArenaMembers,
    setPage,
  } = useContext(Context)

  useEffect(() => {
    const pokemonPowerArr = arenaMembers?.map(pokemon =>
      countPokemonPower(pokemon)
    )
    const pokemonOne = pokemonPowerArr?.[0]
    const pokemonTwo = pokemonPowerArr?.[1]

    if (pokemonOne === pokemonTwo) {
      setDraw(true)
      return
    } else if (pokemonOne > pokemonTwo) {
      const winner = arenaMembers[0]
      const loser = arenaMembers[1]

      checkPokemonIsInJsonServer(winner, 'winner', 10)
      checkPokemonIsInJsonServer(loser, 'loser', 0)
    } else {
      const winner = arenaMembers[1]
      const loser = arenaMembers[0]
      checkPokemonIsInJsonServer(winner, 'winner', 10)
      checkPokemonIsInJsonServer(loser, 'loser', 0)
    }
  }, [arenaMembers])

  const checkPokemonIsInArr = winner =>
    statsFromJsonServer?.some(({ name }) => name === winner?.name)

  const countPokemonPower = pokemon => {
    const { experience, height, weight, speed } = pokemon
    const pokemonPower = experience * weight * height * speed
    return pokemonPower
  }

  const checkPokemonIsInJsonServer = (data, status, experienceToAdd) => {
    const isThere = checkPokemonIsInArr(data)

    if (isThere)
      statsFromJsonServer?.map(
        ({
          ability,
          name,
          experience,
          height,
          weight,
          wins,
          loses,
          speed,
          id,
          img,
        }) => {
          if (name === data.name) {
            if (status === 'winner') {
              const newWinnerData = {
                name,
                experience: experience + experienceToAdd,
                height,
                weight,
                wins: wins + 1,
                loses,
                speed,
                img,
                ability,
              }

              const dataToSend = {
                data: newWinnerData,
                method: 'put',
                id,
              }

              setWinnerData(dataToSend)
            } else {
              const newLoserData = {
                name,
                experience,
                height,
                weight,
                wins,
                loses: loses + 1,
                speed: data?.speed,
                img,
                ability,
              }
              const dataToSend = {
                data: newLoserData,
                method: 'put',
                id,
              }
              setLoserData(dataToSend)
            }
          }
        }
      )
    else {
      if (status === 'winner') {
        const newWinnerData = {
          name: data?.name,
          experience: data?.experience + experienceToAdd,
          height: data?.height,
          weight: data?.weight,
          wins: 1,
          loses: 0,
          ability: data?.ability,
          speed: data?.speed,
          img: data?.img,
        }

        const dataToSend = {
          data: newWinnerData,
          method: 'post',
          id: null,
        }
        setWinnerData(dataToSend)
      } else {
        const newLoserData = {
          name: data?.name,
          experience: data?.experience,
          height: data?.height,
          weight: data?.weight,
          wins: 0,
          loses: 1,
          speed: data?.speed,
          ability: data?.ability,
          img: data?.img,
        }
        const dataToSend = {
          data: newLoserData,
          method: 'post',
          id: null,
        }
        setLoserData(dataToSend)
      }
    }
  }

  const handleButton = async () => {
    setPage(1)
    if (draw) {
      setArenaFinish(true)
      return
    }
    if (winnerData?.method === 'post') {
      await axios.post('http://localhost:3000/stats', { ...winnerData?.data })
    } else
      await axios.put(`http://localhost:3000/stats/${winnerData?.id}`, {
        ...winnerData?.data,
      })
    if (loserData?.method === 'post') {
      await axios.post('http://localhost:3000/stats', { ...loserData?.data })
    } else
      await axios.put(`http://localhost:3000/stats/${loserData?.id}`, {
        ...loserData?.data,
      })
    setArenaFinish(true)
    await getStatsFromJsonServer()
  }

  const deleteFromArena = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/arenaMembers/${arenaMembers[0].id}`
      )
      await axios.delete(
        `http://localhost:3000/arenaMembers/${arenaMembers[1].id}`
      )
    } catch (err) {
      console.log(err)
    }
  }
  const getStatsFromJsonServer = async () => {
    try {
      const response = await axios.get('http://localhost:3000/stats')
      setStatsFromJsonServer(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  const handleFinishArenaButton = () => {
    deleteFromArena()
    setArenaMembers([])
    navigate('/')
  }

  return (
    <S.Wrapper arenaFinish={arenaFinish} octagon="../images/octagon.jpg">
      {arenaFinish && (
        <ArenaSummary
          draw={draw}
          winnerData={winnerData}
          handleFinishArenaButton={handleFinishArenaButton}
        />
      )}
      {!arenaFinish && (
        <>
          <S.PlaceholderWrapper>
            <S.Placeholder themeColor={themeColor}>
              {arenaMembers?.[0] ? (
                <SimplePokemonCard arena pokemonData={arenaMembers[0]} />
              ) : (
                <img src={pokeball} alt="pokeball" />
              )}
            </S.Placeholder>
            <FightButton
              arenaMembers={arenaMembers}
              handleButton={handleButton}
            />
            <S.Placeholder themeColor={themeColor}>
              {arenaMembers?.[1] ? (
                <SimplePokemonCard arena pokemonData={arenaMembers[1]} />
              ) : (
                <img src={pokeball} alt="pokeball" />
              )}
            </S.Placeholder>
          </S.PlaceholderWrapper>
          <S.BackHomeWrapper>
            <BackHomeButton />
          </S.BackHomeWrapper>
        </>
      )}
    </S.Wrapper>
  )
}

export default Arena
