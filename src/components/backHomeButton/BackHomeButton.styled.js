import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export const S = {
  Link: styled(Link)`
    align-items: center;
    border-radius: 333px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    margin: 20px 0;
    width: 640px;
    @media (max-width: 768px) {
      width: 440px;
    }
  `,
  Button: styled(Button)`
    height: 42px;
    width: 100%;
    &:hover {
      transform: scale(1.03);
      transition: ease-in-out 0.3s;
    }
  `,
}
