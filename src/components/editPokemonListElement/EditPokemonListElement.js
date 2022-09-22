import useFetch from '../../hooks/useFetch'
import { useContext, useEffect, useState } from 'react'
import { S } from './EditPokemonListElement.styled'
import { CircularProgress, useTheme, Button } from '@mui/material'
import Context from '../../Context'

const EditPokemonListElement = ({ url, index }) => {
  const { data, loading, error } = useFetch(url)
  const { statsFromJsonServer, themeColor } = useContext(Context)
  const { palette } = useTheme()
  const [exp, setExp] = useState(null)
  const [weight, setWeight] = useState(null)
  const [height, setHeight] = useState(null)

  useEffect(() => {
    const isThere = statsFromJsonServer?.some(({ name }) => name === data?.name)

    if (isThere) {
      statsFromJsonServer?.map(({ name, experience, weight, height }) => {
        if (name === data?.name) {
          setExp(experience)
          setWeight(weight)
          setHeight(height)
        }
      })
    } else {
      setExp(data?.base_experience)
      setWeight(data?.weight)
      setHeight(data?.height)
    }
  }, [data])

  return (
    <S.Wrapper themeColor={themeColor}>
      {loading && (
        <>
          <CircularProgress />
          <p>...LOADING</p>
        </>
      )}
      {data && (
        <>
          <h1>{index}</h1>
          <h3> {data.name.toUpperCase()}</h3>
          <S.Img
            src={data?.sprites.other.dream_world.front_default}
            alt={data.name}
          />
          <S.Link
            to={`/edycja/${data.name}`}
            state={{
              name: data?.name,
              height: height,
              experience: exp,
              weight: weight,
              img: data?.sprites.other.dream_world.front_default,
              speed: data?.stats[5].base_stat,
              ability: data?.abilities[0].ability.name,
            }}
          >
            <Button
              variant="contained"
              color={
                themeColor === 'dark' ? 'loginButtonDark' : 'loginButtonColor'
              }
            >
              Edytuj
            </Button>
          </S.Link>
        </>
      )}
      {error && <p>error:{error}</p>}
    </S.Wrapper>
  )
}

export default EditPokemonListElement
