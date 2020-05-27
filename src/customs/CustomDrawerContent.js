import React, { useState } from 'react';

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import { StyleSheet, Image } from 'react-native';
import { View } from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';

export default function CustomDrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
    return (
        <View style={{flex : 1}}>
            
            <View style={styles.profileContainer}>
                <Avatar.Image 
                    style={styles.image} 
                    source={{
                        uri : 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg'
                    }}
                    size={100}
                />
                <View>
                    <Title style={styles.title}>Mateu Apolinario</Title>
                    <Caption style={styles.caption}>@Mateus</Caption>
                    <Paragraph style={styles.paragraph}>80 followers</Paragraph>
                </View>
            </View>
            
            <DrawerContentScrollView style={styles.container} {...props}>
                
                <DrawerItem
                    icon={({color, size}) => (
                        <MaterialIcons 
                            color={color} 
                            name="home"
                            size={size}
                        />
                    )}
                    style={styles.item}
                    label="Home"
                    onPress={() => { props.navigation.closeDrawer(); props.navigation.navigate('Main') }}
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <MaterialIcons 
                            color={color} 
                            name="person"
                            size={size}
                        />
                    )}
                    style={styles.item}
                    label="My Account"
                    onPress={() => { 
                        props.navigation.closeDrawer();
                        props.navigation.navigate('Person');
                    }}
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <MaterialIcons 
                            color={color} 
                            name="chat"
                            size={size}
                        />
                    )}
                    style={styles.item}
                    label="Chat"
                    onPress={() => { 
                        props.navigation.closeDrawer();
                        props.navigation.navigate('Person');
                    }}
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <MaterialIcons 
                            color={color} 
                            name="store"
                            size={size}
                        />
                    )}
                    style={styles.item}
                    label="Store"
                    onPress={() => { 
                        props.navigation.closeDrawer();
                        props.navigation.navigate('Person');
                    }}
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <MaterialIcons 
                            color={color} 
                            name="clear"
                            size={size}
                        />
                    )}
                    style={styles.item}
                    label="Close"
                    onPress={() => props.navigation.closeDrawer()}
                />
                <Drawer.Section>
                    <TouchableRipple onPress={ toggleTheme }>
                        <View style={styles.preferences}>
                            <Text style={styles.textOptions}>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={isDarkTheme}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </DrawerContentScrollView>

            

            <Drawer.Section style={styles.bottomItem}>
                <DrawerItem
                    icon={({color, size}) => (
                        <MaterialIcons 
                            color={color} 
                            name='reply'
                            size={size}
                        />
                    )}
                    style={styles.item}
                    label="Sign Out"
                    onPress={() => props.navigation.closeDrawer()}
                />
            </Drawer.Section>
        </View>
    );
} 

const styles = StyleSheet.create({
    textOptions : {
        margin : 10,
        fontSize : 15,
        color : '#aaa',
        fontWeight : 'bold'
    },
    preferences : {
        justifyContent : 'space-between',
        flexDirection : 'row'
    },  
    paragraph : {
        fontSize : 10,
        color : '#ddd',
        fontWeight : 'bold'
    },  
    caption : {
        color : '#bbb',
        fontSize : 12,
        fontWeight : 'bold'
    },
    title : {
        color : '#fff',
        fontSize : 15,
        fontWeight : 'bold'
    },
    bottomItem : {
        position : "absolute",
        bottom : 0,
        left : 0
    },
    profileContainer : {
        height : 150,
        backgroundColor : '#00008B',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
    },
    item : {
        backgroundColor : 'white',
    },
    container : {
        backgroundColor : 'white',
    },
    image : {
        width : 100,
        height : 100,
        borderRadius : 60,
        justifyContent : `center`,
        alignItems : "center",
        marginRight : 20
    }
});