import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';


import api from '../services/api';

import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import { connect, disconnect, subscribeToNewStudent } from '../services/socket';

function Main({ navigation }) {
    const [currentRegion, setCurrentRegion] = useState(null);
    const [searchValue, setSearchValue ] = useState('');
    const [students, setStudents] = useState([]);

    useEffect( () => {
        (
            async () => {
                const { granted } = await requestPermissionsAsync();

                if( granted ){
                    const location = await getCurrentPositionAsync({
                        enableHighAccuracy : true,
                    });
                    const { latitude, longitude } = location.coords;
                    setCurrentRegion({
                        latitude,
                        longitude,
                        latitudeDelta : 0.04,
                        longitudeDelta : 0.04,
                    });
                }
            }
        )();
    }, []);

    useEffect( () => {
        subscribeToNewStudent( newStudentNear => setStudents( [...students,newStudentNear] ) );
    }, [students]);

    if(!currentRegion){
        return null;
    }

    function setupWebSocket () {
        const { latitude, longitude } = currentRegion;
        disconnect();
        connect(
            latitude,
            longitude,
            searchValue
        );
    }

    async function loadStudents() {
        const  { latitude, longitude } = currentRegion;
        
        const response = await api.get('/search', {
            params : {
                latitude,
                longitude,
                courses : searchValue
            },
        });
        setStudents(response.data);
        setupWebSocket();
    }

    function handleRegionChanged(region) {
        setCurrentRegion(region);
    }

    return (
        <>
            <View>
                <TouchableOpacity
                    style={styles.buttonHome}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <MaterialIcons name="home" size={30} color="#fff"/>
                </TouchableOpacity>
            </View>
            <MapView 
                onRegionChangeComplete={handleRegionChanged} 
                initialRegion={currentRegion} 
                style={ styles.map }
            >
                {
                    students.map(student => (
                        <Marker 
                            key={ student._id }
                            coordinate={{ 
                                longitude : student.location.coordinates[0],
                                latitude : student.location.coordinates[1], 
                            }}
                        >
                            <Image                                     
                                style={styles.image} 
                                source={{ 
                                    uri : student.avatar_url 
                                }}
                            />
                            <Callout style={styles.calloutContainer}
                                onPress={ () => navigation.navigate('Profile',     
                                    { 
                                        github_username : student.github_username     
                                    }
                                )}
                            >
                                <View style={styles.callout}>
                                    <Text style={styles.teacherName}>{student.name}</Text>
                                    <Text style={styles.teacherBio}>{student.bio}</Text>
                                    <Text style={styles.teacherCourses}>{student.course_of_preference.join(', ')}</Text>
                                </View>
                            </Callout>
                        </Marker> 
                        )
                    )
                }  
            </MapView>

            <View style={styles.form}>
                <TextInput 
                    style={styles.searchInput}
                    placeholder="Escreva os cursos "
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={searchValue}
                    onChangeText={setSearchValue} 
                />

                <TouchableOpacity
                    style={styles.buttonSearch}
                    onPress={loadStudents}
                >
                    <MaterialIcons name="search" size={20} color="#fff"/>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Main;

const styles = StyleSheet.create({
    
    buttonHome: {
        backgroundColor : 'rgba(20, 70, 200, 1)',
        flex: 1,
        borderColor : 'rgba(0,0,0,0)'
    },
    buttonSearch : {
        borderRadius : 25,
        width : 50,
        height : 50,
        justifyContent : 'center',
        alignItems : 'center',
        marginLeft : 15,
        backgroundColor : 'rgba(20, 70, 200, 1)',
    },
    searchInput : {
        flex : 1,
        height : 50,
        backgroundColor : '#fff',
        color : '#333',
        borderRadius : 25,
        paddingHorizontal : 20,
        fontSize : 16,
        elevation : 2,
    },
    form : {
        position : 'absolute',
        top : 20,
        left : 20,
        right : 20,
        zIndex : 5,
        flexDirection : 'row'
    },  
    map : {
        flex : 1
    },
    image : {
        width : 54,
        height : 54,
        borderRadius : 4,
        borderWidth : 4,
        borderColor : '#fff',
    },
    callout : {
        width : 260,
    },
    calloutContainer : {
        height : 100,
    },
    teacherCourses :  {
        marginTop : 5,
    },
    teacherName : {
        fontWeight : 'bold',
        fontSize : 16
    },
    teacherBio :  {
        color : '#666',
        marginTop : 5,
    }
});