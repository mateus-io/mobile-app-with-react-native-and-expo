import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';

import Main from './pages/Main';
import Profile from './pages/Profile';
import CustomDrawerContent from './customs/CustomDrawerContent';

const { Navigator, Screen } = createDrawerNavigator();
const Person = ({navigation}) => ( <Text>Person Page</Text> );
export default function Routes () {
    return (
        <Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="Main">
            <Screen name="Main" component={Main}/>
            <Screen name="Profile" component={Profile}/>
            <Screen name="Person" component={Person}/>
        </Navigator>
    );
}
