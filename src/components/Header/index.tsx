import React from 'react';
import { View } from 'react-native';


import { Container, Gretting, UserName, Avatar } from './styles';

interface Teste {
  name: string
}
export function Header({name}: Teste) {
  
  return (
    <Container >
      <View>
        <Gretting >Olá,</Gretting>
        <UserName >{name}</UserName>
      </View>

      <Avatar source={{ uri: 'https://github.com/1maaaaaack.png' }} />
    </Container>
  );
}