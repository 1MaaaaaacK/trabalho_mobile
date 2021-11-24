import styled from "styled-components/native";

export const Container = styled.TouchableOpacity `
    background-color: ${({ theme }) => theme.colors.green};
    height: 56px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
`