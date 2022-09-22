import styled from '@emotion/styled'
import { Button } from '@mui/material'
export const S = {
  CreateButton: styled(Button)`
    bottom: 30px;
    height: 55px;
    margin-top: 20px;
    position: absolute;
    width: 600px;
    @media (max-width: 768px) {
      width: 400px;
    }
  `,
  Next: styled(Button)`
    position: absolute;
    right: 0px;
    top: 0px;
  `,
  Previous: styled(Button)`
    left: 0px;
    position: absolute;
    top: 0px;
  `,
}
