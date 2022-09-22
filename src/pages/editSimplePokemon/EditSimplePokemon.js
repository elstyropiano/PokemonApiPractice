import { useFormik } from 'formik'
import { S } from './EditSimplePokemon.styled'
import editPokemonSchemas from '../../schemas/editPokemonSchemas'
import { useState, useContext, useEffect } from 'react'
import Context from '../../Context'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import axios from 'axios'
import BackHomeButton from '../../components/backHomeButton/BackHomeButton'
import { useTheme, Button, CircularProgress } from '@mui/material'
import { useSnackbar } from 'notistack'
import CreateNewPokemon from '../../components/createNewPokemon/CreateNewPokemon'
import EditPokemonForm from '../../components/editPokemonForm/EditPokemonForm'

const EditSimplePokemon = () => {
  const buttonsText = ['Zmień atrybuty', 'Stwórz nowego Pokemona']
  const { idPokemon } = useParams()
  const link = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
  const navigate = useNavigate()
  const location = useLocation()
  const { palette } = useTheme()
  const { data, loading } = useFetch(link)
  const { enqueueSnackbar } = useSnackbar()
  const [pokemonExsist, setPokemonExsist] = useState(false)
  const [numButton, setNumButton] = useState(null)
  const [createdPokemonData, setCreatedPokemonData] = useState(false)
  const [nameDifferenceChangePokemon, setNameDifferenceChangePokemon] =
    useState(false)
  const [pokemonWasCreate, setPokemonWasCreate] = useState(false)
  const [allExsistingPokemonsNames, setAllExsistingPokemonsNames] =
    useState(null)
  const {
    statsFromJsonServer,
    setStatsFromJsonServer,
    newPokemonsList,
    themeColor,
  } = useContext(Context)

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

  useEffect(() => {
    const link = `https://pokeapi.co/api/v2/pokemon?limit=1154&offset=0"`
    ;(async () => {
      const response = await axios.get(link)
      const { results } = response.data
      const pokemonsNamesArr = results.map(({ name }) => name)
      const newPokemonsNames = newPokemonsList?.map(({ name }) => name)
      const pokemonsFromApiAndCreated = [
        ...pokemonsNamesArr,
        ...newPokemonsNames,
      ]
      setAllExsistingPokemonsNames(pokemonsFromApiAndCreated)
    })()
  }, [newPokemonsList])

  const pokemonNameToUpperCase = pokemonName => {
    return `${pokemonName.substring(0, 1).toUpperCase()}${pokemonName.substring(
      1,
      pokemonName.length
    )}`
  }
  const putDataOnServer = async (data, id) => {
    await axios.put(`http://localhost:3000/stats/${id}`, { ...data })
    getStatsFromJsonServer()
  }
  const postDataOnServer = async (data, endpoint) => {
    await axios.post(`http://localhost:3000/${endpoint}`, { ...data })
    getStatsFromJsonServer()
  }
  const getStatsFromJsonServer = async () => {
    const response = await axios.get('http://localhost:3000/stats')
    setStatsFromJsonServer(response.data)
  }

  const onSubmit = async values => {
    const isThere = statsFromJsonServer?.some(({ name }) => name === data?.name)

    if (numButton === '0') {
      if (data?.name !== values.name) {
        setNameDifferenceChangePokemon(true)
        return
      }
      if (isThere) {
        statsFromJsonServer?.map(
          ({ name, wins, loses, speed, img, ability, id }) => {
            if (name === data?.name) {
              const dataToSend = {
                name,
                experience: values.experience,
                height: values.height,
                weight: values.weight,
                wins,
                loses,
                speed,
                img,
                ability,
              }
              putDataOnServer(dataToSend, id)
            }
          }
        )
      } else {
        const dataToSend = {
          name: data?.name,
          experience: values.experience,
          height: values.height,
          weight: values.weight,
          wins: 0,
          loses: 0,
          speed: data?.stats[5].base_stat,
          img: data?.sprites.other.dream_world.front_default,
          ability: data?.abilities[0].ability.name,
        }
        postDataOnServer(dataToSend, 'stats')
      }

      await new Promise(resolve => {
        setTimeout(resolve, 1000)
      })

      const nameUpper = pokemonNameToUpperCase(values.name)
      snackBar(`Zmieniono atrybuty pokemona :  ${nameUpper}`)
    } else if (numButton === '1') {
      if (allExsistingPokemonsNames.indexOf(values.name) !== -1) {
        setPokemonExsist(true)
        return
      }
      const dataToSend = {
        name: values.name,
        experience: values.experience,
        height: values.height,
        weight: values.weight,
        wins: 0,
        loses: 0,
        ability: 'God-Mode',
        speed: location.state.speed,
      }
      setCreatedPokemonData(dataToSend)
      setPokemonWasCreate(true)
    }
  }
  const {
    values,
    errors,
    touched,
    handleChange,
    isSubmitting,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: {
      name: location.state.name,
      height: location.state.height,
      experience: location.state.experience,
      weight: location.state.weight,
    },
    validationSchema: editPokemonSchemas,
    onSubmit,
  })

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit} autoComplete="off">
        <S.FormWrapper
          pokemonWasCreate={pokemonWasCreate}
          themeColor={themeColor}
        >
          {pokemonWasCreate && (
            <CreateNewPokemon createdPokemonData={createdPokemonData} />
          )}
          {!pokemonWasCreate && (
            <>
              <S.H1
                color={
                  themeColor === 'dark' ? 'loginButtonDark' : 'loginButtonColor'
                }
              >
                {idPokemon.toUpperCase()}
              </S.H1>
              {loading ? (
                <CircularProgress />
              ) : (
                <S.Img
                  src={data?.sprites.other.dream_world.front_default}
                  alt={data?.name}
                />
              )}
              <EditPokemonForm
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                nameDifferenceChangePokemon={nameDifferenceChangePokemon}
                pokemonExsist={pokemonExsist}
                themeColor={themeColor}
                touched={touched}
                values={values}
              />
              {buttonsText.map((text, value) => (
                <Button
                  color={
                    themeColor === 'dark'
                      ? 'loginButtonDark'
                      : 'loginButtonColor'
                  }
                  disabled={isSubmitting}
                  key={text}
                  onClick={e => setNumButton(e.target.value)}
                  sx={{ marginTop: '30px ', height: '55px', width: '100%' }}
                  type="submit"
                  value={value}
                  variant="contained"
                >
                  {text}
                </Button>
              ))}
            </>
          )}
        </S.FormWrapper>
      </form>
      <BackHomeButton />
    </S.Wrapper>
  )
}
export default EditSimplePokemon
