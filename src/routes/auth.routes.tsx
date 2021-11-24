import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Signin } from '../pages/Signin';
import { Confirmation } from '../pages/Confirmation';
import { MainScreen } from '../pages/Main';
const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes () {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}
        >
            <Screen
                name="Home"
                component={Home}
            /> 
            <Screen
                name="Signin"
                component={Signin}
            /> 
            <Screen
                name="Confirmation"
                component={Confirmation}
            />  
           
             <Screen
                name="MainScreen"
                component={MainScreen}
            /> 
            
        </Navigator>
    )
}