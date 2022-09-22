import styled from 'styled-components'

export const S = {
  ChosePokemonIconText: styled.h1`
    color: ${({ color }) => color};
    position: absolute;
    top: -75px;
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
    padding: ${({ pokemonWasCreate }) =>
      pokemonWasCreate ? '70px 20px 110px 20px' : '20px 20px 30px 20px'};
    position: relative;
    width: 600px;

    @media (max-width: 768px) {
      width: 400px;
    }
  `,
  H1: styled.h1`
    color: ${({ color }) => color};
    width: 100%;
    text-align: center;
  `,
  Img: styled.img`
    position: absolute;
    top: 5px;
    right: 5px;
    width: 100px;
    height: 100px;
  `,
  ValidationErrorMessage: styled.span`
    color: #d32f2f;
  `,
  Wrapper: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-top: 70px;
    position: relative;
    width: 100%;
  `,
}
