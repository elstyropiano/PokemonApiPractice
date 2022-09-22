import styled from 'styled-components'

export const S = {
  DescripionWrapper: styled.div`
    align-items: center;
    color: ${({ color }) => color};
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: space-around;
    margin-top: 10px;
    width: 100%;
  `,
  DoubleDecripionWrapper: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    width: 100%;
  `,
  H1: styled.h1`
    color: ${({ color }) => color};
    font-size: ${({ details }) => (details ? '40px' : '30px')};
    margin: 0;
    padding: 0;
  `,
  ImgWrapper: styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 50%;
    justify-content: center;
    padding: 10px;
    width: 100%;
  `,
  SimpleDecripionWrapper: styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
  `,
  Span: styled.span`
    align-items: center;
    color: ${({ color }) => color};
    display: flex;
    flex-direction: column;
  `,
  SpanPropsName: styled.div`
    color: ${({ color }) => color};
    font-size: 16px;
    font-weight: 700;
  `,
  StatisticWrapper: styled.div`
    display: flex;
    flex: 1;
    margin-top: 7px;
    width: 100%;
  `,
}
