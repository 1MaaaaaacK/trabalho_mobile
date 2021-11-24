import React from 'react';

import { Header } from '../../components/Header';

import { Container, HeaderStyle, SubTitle, Title } from './styles';
import { useRoute } from '@react-navigation/native';

interface RouteParams {
  name: string;
}

export function MainScreen() {
  const route = useRoute();

  const {
    name
  } = route.params as RouteParams; 
  
  return (
    <Container >
      <HeaderStyle>
        <Header name={name}/>

        <Title>
          Em qual ambiente
        </Title>
        <SubTitle>
          você quer colocar a sua planta?
        </SubTitle>
          
      </HeaderStyle>
      
    </Container>
    
  );
}