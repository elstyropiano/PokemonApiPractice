import styled from 'styled-components'
import stadion from '../../images/pokemonStadion.png'

export const S = {
  BackHomeWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Placeholder: styled.div`
    align-items: center;
    background-color: rgba(255, 187, 0, 1);
    background-image: ${({ themeColor }) =>
      themeColor === 'dark'
        ? `linear-gradient(128deg
          , rgba(204, 214, 221, 1) 0%,
           rgba(251, 251, 251, 1) 50%,
            rgba(204, 214, 221, 1) 100%)`
        : `linear-gradient(
      320deg,
      rgba(255, 187, 0, 1) 00%,
      rgba(251, 251, 251, 1) 100%
    )`};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 400px;
    justify-content: center;
    width: 310px;
    -webkit-box-shadow: 8px 8px 24px 0px rgba(155, 155, 159, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(155, 155, 159, 1);
    box-shadow: 8px 8px 24px 0px rgba(155, 155, 159, 1);
  `,

  PlaceholderWrapper: styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    @media (max-width: 810px) {
      flex-direction: column;
      margin-top: 50px;
    }
  `,

  WinnerDiv: styled.div`
    align-items: center;
    background-color: #292f33;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    opacity: 0.8;
    position: fixed;
    top: 0;
    width: 100%;
  `,
  Wrapper: styled.div`
    background-image: url(${stadion});
    background-repeat: round;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: ${({ arenaFinish }) =>
      arenaFinish ? 'center' : 'space-between'};
    width: 100%;
    @media (max-width: 810px) {
      height: auto;
    }
  `,
}
