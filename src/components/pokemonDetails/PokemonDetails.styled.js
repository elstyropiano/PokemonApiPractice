import styled from 'styled-components'
import StadiumIcon from '@mui/icons-material/Stadium'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const S = {
  ArenaMember: styled.h1`
    left: 5px;
    bottom: 33px;
    position: absolute;
    color: ${({ warning }) => (warning ? 'red' : 'inherit')};
  `,
  Img: styled.img`
    height: 180%;
    width: 80%;
  `,
  ImgWrapper: styled.div`
    height: 50%;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    flex-direction: column;
  `,

  StadiumIcon: styled(StadiumIcon)`
    bottom: 0;
    color: ${({ inarena }) => (inarena ? 'green' : 'inherit')};
    cursor: pointer;
    left: 0;
    position: absolute;
    &:hover {
      transform: scale(1.3);
      transition: ease-in-out 0.3s;
    }
  `,
  FavoriteIcon: styled(FavoriteIcon)`
    cursor: pointer;
    color: ${({ fav }) => (fav ? 'red' : 'inherit')};
    position: absolute;
    right: 0;
    top: 0;
    &:hover {
      transform: scale(1.3);
      transition: ease-in-out 0.3s;
    }
  `,
  FullArenaInfo: styled.span`
    bottom: 8px;
    color: red;
    font-size: 20px;
    font-weight: 600;
    left: 72px;
    position: absolute;
  `,
  Wrapper: styled.div`
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
    box-shadow: 8px 8px 24px 0px rgba(155, 155, 159, 1);
    border-radius: 10px;
    display: flex;
    height: 400px;
    justify-content: center;
    position: relative;
    width: 80%;
    -webkit-box-shadow: 8px 8px 24px 0px rgba(155, 155, 159, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(155, 155, 159, 1);
  `,
}
