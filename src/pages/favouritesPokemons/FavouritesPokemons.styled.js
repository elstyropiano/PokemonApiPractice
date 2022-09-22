import styled from 'styled-components'

export const S = {
  BackHomeWrapper: styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
  `,
  Img: styled.img`
    height: 400px;
  `,
  Wrapper: styled.div`
    align-items: stretch;
    background-color: ${({ color }) => color};
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ empty }) => (empty ? 'column' : 'row')};
    height: auto;
    justify-content: center;
    margin-top: 100px;
  `,
}
