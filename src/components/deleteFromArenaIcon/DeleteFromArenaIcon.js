import axios from 'axios'
import { S } from './DeleteFromArenaIcon.styled'
import { useContext } from 'react'
import Context from '../../Context'

const DeleteFromArenaIcon = ({ pokemonData }) => {
  const { arenaMembers, setArenaMembers } = useContext(Context)

  const deleteArenaMember = () =>
    arenaMembers.map(({ name }, index) => {
      if (name === pokemonData.name) {
        const id = arenaMembers[index].id
        ;(async () => {
          await axios.delete(`http://localhost:3000/arenaMembers/${id}`)
          getArenaMembers()
        })()
      }
    })
  const getArenaMembers = async () => {
    const response = await axios.get('http://localhost:3000/arenaMembers')
    setArenaMembers(response.data)
  }

  return (
    <S.ClearIcon fontSize="large" color="info" onClick={deleteArenaMember} />
  )
}

export default DeleteFromArenaIcon
