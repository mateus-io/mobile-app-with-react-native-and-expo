import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Main from '../pages/Main';
const MusicRoute = () => (<Text>Music</Text>);

const AlbumsRoute = () => (<Text>Albums</Text>);

const RecentsRoute = () => (<Text>Recents</Text>);

const initialState = {
    index: 0,
    routes: [
        { key: 'main', title: 'Main', icon: 'home' },
        { key: 'main1', title: 'Main1', icon: 'home' },
        { key: 'main2', title: 'Main2', icon: 'home' },
    ],
};

export default function BottomNavigationCustom() {
    const renderScene = BottomNavigation.SceneMap({
        main: Main,
        main1: MusicRoute,
        main2: AlbumsRoute
    });
    const [state, setState] = useState(initialState);
    return (
        <BottomNavigation
            navigationState={state}
            onIndexChange={ (e) => setState({ index : e.index, routes : initialState.routes}) }
            renderScene={renderScene}
        />
    );
}