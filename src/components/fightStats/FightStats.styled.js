import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    align-items: flex-start;
    background-color: ${({ color }) => color};
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 500;
    justify-content: center;
    left: 0;
    padding: 10px;
    position: absolute;
    top: 0;
  `,
  ShortcutSpan: styled.span`
    margin-right: 10px;
    width: 10px;
  `,
  Span: styled.span`
    display: flex;
  `,
  Div: styled.div`
    display: flex;
  `,
}
