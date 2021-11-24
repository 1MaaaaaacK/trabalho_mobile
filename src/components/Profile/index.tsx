import React from "react";
import { Avatar } from "../Avatar";
import { Container, Content, User, Greeting, UserName, Message } from './styles'

export function Profile() {
    return (
        <Container>
            <Avatar urlImage='https://github.com/1MaaaaaacK.png'/>
            <Content>
                <User>
                    <Greeting>
                        Olá
                    </Greeting>
                    <UserName>
                        Marcos
                    </UserName>
                </User>
                <Message>
                    Hoje é dia de vitória
                </Message>
            </Content>
        </Container>
    )
}