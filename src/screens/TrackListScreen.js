import React,{useContext} from 'react';

import {View,StyleSheet,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {Text,ListItem} from 'react-native-elements';
import {NavigationEvents} from 'react-navigation';
import  {Context as TrackContext} from '../context/TrackContext';
const TrackListScreen=({navigation})=>{
const {state,fetchTracks}=useContext(TrackContext);
    console.log(state);
    return <ScrollView snapToEnd bounces style={styles.container}>
        <NavigationEvents onWillFocus={fetchTracks} />
    <Text h3>TrackListScreen</Text>
    <FlatList
    data={state}
    keyExtractor={item=>item._id}
    renderItem={({item})=>{
    return <TouchableOpacity onPress={()=>
    navigation.navigate('TrackDetail',{_id:item._id})
    }>
        <ListItem chevron title={item.name}/>
    </TouchableOpacity>
        }
    }
    />
    </ScrollView>
}

const styles=StyleSheet.create({
    container:{
        marginHorizontal:15,
        marginTop:50
    }
});

export default TrackListScreen;