import styled from 'styled-components'

export const S = {
  MainWrapper: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 70px 0 10px 0;
    width: 100%;
  `,
  FormWrapper: styled.div`
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 20px 50px 20px;
    position: relative;
    width: 600px;
    @media (max-width: 768px) {
      width: 400px;
    }
  `,
  ValidationErrorMessage: styled.span`
    color: ${({ color }) => color};
  `,
  H1: styled.h1`
    color: ${({ color }) => color};
    text-align: center;
    width: 100%;
  `,
  Error: styled.p`
    color: ${({ color }) => color};
  `,
}
