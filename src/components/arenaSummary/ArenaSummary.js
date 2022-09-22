import { S } from './ArenaSummary.styled'
import Context from '../../Context'
import { useContext } from 'react'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import Zoom from 'react-reveal/Zoom'
import SimplePokemonCard from '../simplePokemonCard/SimplePokemonCard'
import crown from '../../images/crown.png'
import pikachu from '../../images/pikachu.png'

const ArenaSummary = ({ handleFinishArenaButton, winnerData, draw }) => {
  const { themeColor } = useContext(Context)
  return (
    <S.WinnerDiv draw={draw}>
      {draw ? (
        <S.Draw>
          <S.WinnerText>Remis!!</S.WinnerText>
          <S.WinnerText>Pokemony zderzyły się i wypadły z areny!</S.WinnerText>
          <S.DrawImg src={pikachu} alt="pikachu" />
        </S.Draw>
      ) : (
        <>
          <S.WinnerText>Zwycięzca</S.WinnerText>
          <S.Img src={crown} alt="crown" />
          <S.ExperienceText>Otrzymano +10 exp</S.ExperienceText>
          <S.ExperienceText>Nowe statystyki :</S.ExperienceText>

          <Fade>
            <Flip>
              <Zoom>
                <SimplePokemonCard arenaWinner pokemonData={winnerData.data} />
              </Zoom>
            </Flip>
          </Fade>
        </>
      )}
      <S.LeaveArenaButtonWrapper>
        <S.Button
          onClick={handleFinishArenaButton}
          variant="contained"
          color={themeColor}
        >
          Opusć arene
        </S.Button>
      </S.LeaveArenaButtonWrapper>
    </S.WinnerDiv>
  )
}

export default ArenaSummary
