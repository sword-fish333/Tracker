import React from 'react';
import {createAppContainer,createStackNavigator,createBottomTabNavigator,createSwitchNavigator} from 'react-navigation';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import  SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {setNavigator} from './src/navigationRef';
import {Provider as AuthProvider} from './src/context/AuthContext';
const switchNavigator=createSwitchNavigator({
    loginFlow:createStackNavigator({
        Signup:SignupScreen,
        Signin:SigninScreen
    }),
    mainFlow:createBottomTabNavigator({
        trackListFlow:createStackNavigator({
            TrackList:TrackListScreen,
            TrackDetail:TrackDetailScreen
        }),
        TrackCreate:TrackCreateScreen,
        Account:AccountScreen
    })
})

const App= createAppContainer(switchNavigator);

export  default ()=>{
    console.log('nav',navigator);
    return (<AuthProvider>
        <App ref={navigator=>{setNavigator(navigator)}}/>
    </AuthProvider>)
}