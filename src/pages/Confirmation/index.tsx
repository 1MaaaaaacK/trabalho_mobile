import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';

import { Button } from '../../components/Button';

import { Button_Text, Container, Content, Emoji, Footer, SubTitle, Title } from './styles';

interface RouteParams {
  name: string;
}

export function Confirmation() {
  const route = useRoute();
  const navigator = useNavigation();

  const {
    name
  } = route.params as RouteParams; 
  
  return (
    <Container>
      <Content>
        <Emoji>
        😄
        </Emoji>
        <Title>
        Prontinho
        </Title>
        <SubTitle>
        Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </SubTitle>

        <Footer>
          <Button  onPress={() => navigator.navigate('MainScreen',{name: name})} >
            <Button_Text>
              Começar
            </Button_Text>
          </Button> 
        </Footer>
      </Content>
    </Container>
  );
}