import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1px;
    background-color: ${({ theme }) => theme.colors.background};
  `
  export const HeaderStyle = styled.View`

  padding-bottom: 30px;
  `
  export const Title = styled.Text`
    font-size: 17px;
    color: ${({ theme }) => theme.colors.heading};
    font-family: ${({ theme }) => theme.fonts.title700};
    line-height: 20px;
    margin-top: 15px;
    padding: 0px 20px 0px 20px;
  `
  export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text400};
    font-size: 17px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.heading};
    padding: 0px 20px 0px 20px;
`
export const ButtonsText = styled.Text`

padding: 0px 20px 0px 20px;
`
export const Buttons = styled.View`

width: 90px;
`