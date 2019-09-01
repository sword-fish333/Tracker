import React,{useState,useEffect,useContext,useCallback} from 'react';
import {Text} from 'react-native-elements'
import {View,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
import TrackForm from '../components/TrackForm';
    import _mockLocation from '../_mockLocation';
   import {withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen=({isFocused})=>{
const {state:{recording},addLocation}=useContext(LocationContext);
const callback=useCallback((location)=>addLocation(location,recording),[recording]);
const [err]=useLocation(isFocused || recording,callback);

    return<View style={styles.container}>
        <Text h3>TrackCreateScreen</Text>
        {err ? <Text>Please enable location services </Text> : null}
        <Map/>
        <TrackForm/>
    </View>
}

TrackCreateScreen.navigationOptions=()=>{
return {
    title: 'Add Track',
    tabBarIcon: <Feather name="plus" size={20}/>
}
};

const styles=StyleSheet.create({
        container:{
            marginTop:50,
            marginHorizontal:25
        }
})


export default withNavigationFocus(TrackCreateScreen);