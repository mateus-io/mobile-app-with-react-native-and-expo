import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Profile({ route, navigation }) {
    const { github_username } = route.params;
    
    return (
        <>
            <Button 
                title="Back Page"
                onPress= { () => navigation.goBack() }
            />
            <WebView style={{ flex : 1 }} source={{ uri : `https://github.com/${github_username}` }}>
                
            </WebView>
        </>
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

