import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const S = {
  Img: styled.img`
    height: 70px;
    width: 70px;
  `,
  Link: styled(Link)`
    text-decoration: none;
  `,
  Wrapper: styled.div`
    align-items: center;
    background-image: ${({ themeColor }) =>
      themeColor === 'dark'
        ? `linear-gradient(90deg
          , rgba(204, 214, 221, 1) 0%,
           rgba(251, 251, 251, 1) 100%)`
        : `linear-gradient(
      90deg,
      rgba(255, 187, 0, 1) 00%,
      rgba(251, 251, 251, 1) 100%
    )`};
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    height: 100px;
    justify-content: space-between;
    margin-top: 10px;
    padding: 20px;
    width: 60%;
  `,
}
