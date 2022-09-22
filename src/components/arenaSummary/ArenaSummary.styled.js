import styled from 'styled-components'
import { Button } from '@mui/material'

export const S = {
  Button: styled(Button)`
    height: 42px;
    width: 640px;
    &:hover {
      transform: scale(1.03);
      transition: ease-in-out 0.3s;
    }
    @media (max-width: 768px) {
      width: 440px;
    }
  `,
  Draw: styled.div`
    align-items: center;
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: space-between;
  `,
  DrawImg: styled.img`
    height: 500px;
    @media (max-width: 768px) {
      height: 400px;
    }
  `,
  ExperienceText: styled.h2`
    color: white;
    margin-top: 5px;
  `,
  Img: styled.img`
    margin-bottom: 20px;
    width: 150px;
  `,
  LeaveArenaButtonWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
  `,
  WinnerDiv: styled.div`
    align-items: center;
    background-color: rgba(41, 47, 51, 0.8);
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  `,
  WinnerText: styled.h1`
    color: white;
    letter-spacing: 3px;
    font-size: 50px;
    margin-bottom: 20px;
    padding: 0;
    text-align: center;
  `,
}
