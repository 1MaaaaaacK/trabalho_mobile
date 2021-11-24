import styled from 'styled-components/native'


export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px 0px 20px;
    margin-top: 70px;
  `
  export const Gretting = styled.Text`

    font-size: 32px;
    color: ${({ theme }) => theme.colors.heading};
    font-family: ${({ theme }) => theme.fonts.text400};
  `
  export const UserName = styled.Text`

    font-size: 32px;
    font-family: ${({ theme }) => theme.fonts.title700};
    color: ${({ theme }) => theme.colors.heading};
    line-height: 40px;
  `
  export const Avatar = styled.Image`

    width: 70px;
    height: 70px;
    border-radius: 40px;
  `