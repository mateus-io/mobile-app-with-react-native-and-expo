import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    headerStyle: {
                        backgroundColor: '#00008B',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        textAlign: 'center',
                    },
                    title: 'MainPage'
                }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerStyle: {
                        backgroundColor: '#00008B',
                    },
                    headerTintColor: '#fff',
                    headerBackTitleVisible: false,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        textAlign: 'center',
                    },
                    title: 'Perfil do GitHub'
                }}
            />
        </Stack.Navigator>
    );
}
