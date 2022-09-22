import { S } from './FightButton.styled'
import { useTheme } from '@mui/material'
import { useContext } from 'react'
import Context from '../../Context'
import sword from '../../images/swords.png'

const FightButton = ({ arenaMembers, handleButton }) => {
  const { palette } = useTheme()
  const { themeColor } = useContext(Context)

  return (
    <S.Button
      disabled={arenaMembers?.length !== 2}
      color={themeColor === 'dark' ? palette.dark.main : palette.light.main}
      onClick={handleButton}
    >
      <S.Img src={sword} />
      <S.H1
        color={themeColor === 'dark' ? palette.dark.main : palette.light.main}
      >
        Walcz
      </S.H1>
    </S.Button>
  )
}

export default FightButton
