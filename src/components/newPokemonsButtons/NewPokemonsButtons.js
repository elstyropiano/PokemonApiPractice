import { useState, useContext, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import axios from 'axios'
import Context from '../../Context'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'
import { S } from './NewPokemonsButtons.styled'
//napisac logike ktora bedzie odrzucala ikony stworzonych pokemonow zeby sie nie powtarzaly
const NewPokemonsButtons = ({
  createdPokemonData,
  setNewPokemonImg,
  newPokemonImg,
  setIconExsistInServer,
  iconExsistInServer,
}) => {
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=10000'
  const { data } = useFetch(url)
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const [isCreating, setIsCreating] = useState(false)
  const [number, setNumber] = useState(0)

  const {
    setStatsFromJsonServer,
    newPokemonsList,
    setNewPokemonsList,
    setPage,
    themeColor,
  } = useContext(Context)

  useEffect(() => {
    getPokemonImage(data?.results[number]?.url)
  }, [number, data])

  const pokemonNameToUpperCase = pokemonName =>
    `${pokemonName.substring(0, 1).toUpperCase()}${pokemonName.substring(
      1,
      pokemonName.length
    )}`

  const snackBar = text => {
    navigate('/')
    enqueueSnackbar(text, {
      variant: 'success',
      anchorOrigin: {
        horizontal: 'center',
        vertical: 'top',
      },
    })
  }

  const createNewPokemon = () => {
    setIsCreating(true)
    const newData = {
      ...createdPokemonData,
      img: newPokemonImg,
      ability: 'god-mode',
    }
    postDataOnServer(newData)
    const nameUpper = pokemonNameToUpperCase(createdPokemonData.name)
    setTimeout(() => {
      snackBar(`Stworzono nowego Pokemona ${nameUpper}`)
    }, 1000)
  }

  const getStatsFromJsonServer = async () => {
    const response = await axios.get('http://localhost:3000/stats')
    setStatsFromJsonServer(response.data)
  }

  const getNewPokemonList = async () => {
    const response = await axios.get(`http://localhost:3000/newPokemons`)
    setNewPokemonsList(response.data)
  }

  const getPokemonImage = async url => {
    const response = await axios.get(url)
    const imgUrlFromApi = response.data.sprites.other.dream_world.front_default

    const iconExsist = newPokemonsList?.some(({ img }) => img === imgUrlFromApi)
    setIconExsistInServer(iconExsist)
    setNewPokemonImg(imgUrlFromApi)
  }

  const postDataOnServer = async data => {
    await axios.post(`http://localhost:3000/newPokemons`, { ...data })
    getStatsFromJsonServer()
    getNewPokemonList()
    setPage(1)
  }
  const handleButton = e => {
    e.target.innerText === 'NEXT'
      ? setNumber(prev => prev + 1)
      : setNumber(prev => prev - 1)
  }

  return (
    <>
      <S.Previous
        color={themeColor === 'dark' ? 'loginButtonDark' : 'loginButtonColor'}
        disabled={number === 0}
        onClick={handleButton}
        size="large"
        variant="contained"
      >
        Prev
      </S.Previous>
      <S.Next
        color={themeColor === 'dark' ? 'loginButtonDark' : 'loginButtonColor'}
        disabled={number === data?.results.length}
        onClick={handleButton}
        size="large"
        variant="contained"
      >
        Next
      </S.Next>
      <S.CreateButton
        color={themeColor === 'dark' ? 'loginButtonDark' : 'loginButtonColor'}
        disabled={isCreating || iconExsistInServer}
        onClick={createNewPokemon}
        size="large"
        variant="contained"
      >
        Stwórz
      </S.CreateButton>
    </>
  )
}

export default NewPokemonsButtons
