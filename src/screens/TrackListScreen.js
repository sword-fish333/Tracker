import React from 'react';

import {View,Text,StyleSheet,Button} from 'react-native';


const TrackListScreen=({navigation})=>{


    return <>

    <Text>TrackListScreen</Text>
    <Button  onPress={()=>navigation.navigate('TrackDetail')} title="Go to track detail" />

    </>
}

const styles=StyleSheet.create({

})

export default TrackListScreen;