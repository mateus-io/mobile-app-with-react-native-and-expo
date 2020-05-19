import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Main({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Test Main Page</Text>
            <LinearGradient
                colors={['#725fc1', '#725fa1', '#725fc1']}
                style={{ padding: 5, alignItems: 'center', borderRadius: 5 }}>
                <Button
                    title="Next Page"
                    style={styles.button}
                    onPress={() => navigation.navigate('Profile')}
                />
            </LinearGradient>
            
        </View>
    );
}

export default Main;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'darkblue',
        fontWeight: 'bold',
        fontSize: 30
    },
    button: {
        backgroundColor : 'transparent',
        borderColor : 'rgba(0,0,0,0)'
    }
});