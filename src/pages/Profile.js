import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Test Profile informations etc...</Text>
            <Button 
                title="Back Page"
                onPress= { () => navigation.goBack() }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text : {
        color : '#fff',
        fontSize : 30,
        textAlign : 'center'
    },
    container : {
        backgroundColor : 'black',
    }
});

