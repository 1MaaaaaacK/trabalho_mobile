import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { Container, Title, Content, Form, Header, Emoji, Input, Footer, ButtonText } from './styles';
import { Button } from '../../components/Button';

export function Signin() {
    const navigation = useNavigation();
  
    const [name, setName] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
  
    function handleInputBlur() {
      setIsFocused(false);
      setIsFilled(!!name);
    }
  
    function handleInputFocus() {
      setIsFocused(true)
    }
  
    function handleInputChange(value: string) {
      setIsFilled(!!value);
      setName(value);
    }
  
    async function handleSubmit() {
      if (!name)
        return Alert.alert("Me diz ai como se chama!");
  
       navigation.navigate('Confirmation', {name: name});

    }
  
    return (
        <Container>
      <KeyboardAvoidingView
        behavior="padding"
      >
        <TouchableWithoutFeedback 
          disabled={!isFocused} 
          onPress={Keyboard.dismiss}
        >
          <Content>
            <Form>
              <Header>
                <Emoji>
                  {isFilled ? "😄" : "😀"}
                </Emoji>
                <Title>
                  Como podemos {"\n"} chamar você?
                </Title>
              </Header>

              <Input
                placeholder="Digite um nome" 
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={(value) => handleInputChange(value)}
              />

              <Footer>
                <Button
                  disabled={!name}
                  onPress={handleSubmit}
                >
                  <ButtonText>
                    Confirmar
                  </ButtonText>
                </Button>
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
    )
}