import ClearIcon from '@mui/icons-material/Clear'
import styled from 'styled-components'

export const S = {
  ClearIcon: styled(ClearIcon)`
    background-color: black;
    border-radius: 5px;
    position: absolute;
    right: 0;
    top: 0;
    &:hover {
      color: red;
      cursor: pointer;
    }
  `,
}
