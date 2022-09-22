import styled from 'styled-components'

export const S = {
  Img: styled.img`
    filter: ${({ iconExsistInServer }) =>
      iconExsistInServer && 'grayscale(100%)'};
    height: ${props => (props.details ? '180%' : '100%')};
    width: ${props => (props.details ? '60%' : '71%')};
  `,
  ImgWrapper: styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: center;
    width: 100%;
    padding: 10px;
  `,
  MainWrapper: styled.div`
    align-items: center;
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
    -webkit-box-shadow: 8px 8px 24px 0px rgba(155, 155, 159, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(155, 155, 159, 1);
    box-shadow: 8px 8px 24px 0px rgba(155, 155, 159, 1);
    display: flex;
    flex-direction: column;
    height: 400px;
    justify-content: center;
    margin: ${({ arena }) => (arena ? '0 ' : '20px')};
    position: relative;
    width: ${({ details }) => (details ? '80%' : '310px')};

    &:hover {
      background-image: ${({ list }) => list && 'none'};
      background-color: ${({ arenaWinner }) =>
        arenaWinner ? 'none' : 'inherit'};
      box-shadow: ${({ list }) => (list ? 'none' : 'disabled')};
      border: none;
      transform: ${({ list }) => (list ? 'scale(1.1)' : 'none')};
      transition: ease-in-out 0.3s;
    }
  `,
  PokemonExsistWarning: styled.span`
    color: #e50914;
    font-size: 20px;
    font-weight: 600;
  `,
  PokemonWrapper: styled.div`
    align-items: center;
    display: flex;
    flex-direction: ${({ details }) => (details ? 'row' : 'column')};
    height: 100%;
    justify-content: center;
    width: 100%;
  `,
}
