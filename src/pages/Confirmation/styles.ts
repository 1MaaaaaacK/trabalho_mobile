import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1px;
    align-items: center;
    justify-content: space-around;
  `
export const Content = styled.View`
    flex: 1px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
  `
export const Emoji = styled.Text`
    font-size: 78px;
  `
export const Title = styled.Text`
    font-size: 22px;
    font-family: ${({ theme }) => theme.fonts.title700};
    text-align: center;
    color: ${({ theme }) => theme.colors.heading};
    line-height: 38px;
    margin-top: 15px;
    padding-bottom: 15px;
  `
export const SubTitle = styled.Text`

    font-family: ${({ theme }) => theme.fonts.text400};
    text-align: center;
    font-size: 17px;
    padding: 0px 10px 0px 10px;
    color: ${({ theme }) => theme.colors.heading};
    padding-bottom: 30px;

  `
export const Footer = styled.View`
    width: 100%;
    padding-bottom: 50px;
    margin-top: 20px;
  `
export const Button_Text = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.title700};
  `