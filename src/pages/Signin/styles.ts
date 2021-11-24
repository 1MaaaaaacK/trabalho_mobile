import styled from 'styled-components/native'


export const Container = styled.SafeAreaView`
    flex: 1px;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    `
export const Content = styled.View`
    flex: 1px;
    `
export const Form= styled.View`
    flex: 1px;
    justify-content: center;
    padding-bottom: 54px;
    align-items: center;
    `
export const Header= styled.View`
    align-items: center;
    `
export const Title= styled.Text`
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: ${({ theme }) => theme.colors.heading};
    font-family: ${({ theme }) => theme.fonts.title700};
    margin-top: 20px;
    `
export const Emoji= styled.Text`
    font-size: 44px;
    `
export const Input= styled.TextInput`
    border-bottom-width: 1px;
    color: ${({ theme }) => theme.colors.heading};
    width: 100%;
    font-size: 18px;
    margin-top: 50px;
    padding: 10px;
    text-align: center;
    `
export const Footer= styled.View`
    margin-top: 40px;
    width: 100%;
    padding-bottom: 20px;
    `
export const ButtonText= styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.title700};
    `