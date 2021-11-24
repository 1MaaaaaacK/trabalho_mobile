import styled from "styled-components/native";

export const Container = styled.View `
    flex: 1;
`
export const Header = styled.View `
    flex: 1;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
    padding-bottom: 20px;
`
export const Title = styled.Text  `
    font-size: 28px;
    text-align: center;
    color: ${({ theme }) => theme.colors.heading};
    margin-top: 38px;
    font-family: ${({ theme }) => theme.fonts.title700};
    line-height: 34px;
`
export const SubTitle = styled.Text `
    font-size: 18px;
    text-align: center;
    padding-bottom: 20px;
    color: ${({ theme }) => theme.colors.heading};
    font-family: ${({ theme }) => theme.fonts.text400};
`
export const Image = styled.Image `
    width: 505px;
`
export const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
    width: 56px;
    height: 56px;
`
export const ButtonIcon = styled.TouchableOpacity `
    font-size: 50px;
    color: ${({ theme }) => theme.colors.white};
`