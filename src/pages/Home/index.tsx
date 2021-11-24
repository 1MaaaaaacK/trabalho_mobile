import React from "react";
import { Container, Header, Title, SubTitle, Image, Button, ButtonIcon } from './styles'
import wateringImg from '../../assets/watering.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('Signin');

    }

    return (
        <Container>
            <Header>
                <Title>
                    Gerencie {'\n'} suas plantas de {'\n'} forma fácil
                </Title>
                <Image source={wateringImg} resizeMode="contain" />

                <SubTitle>
                    Não esqueça mais de regar suas {'\n'}plantas. Nós cuidamos de lembrar você{'\n'} sempre que precisar.
                </SubTitle>

                <Button
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <Feather name="chevron-right" size={20} color="white"/>
                </Button>
            </Header>
        </Container>
    )
}