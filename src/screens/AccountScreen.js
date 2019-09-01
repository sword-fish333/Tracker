import React,{useContext} from 'react';
import {Text} from 'react-native-elements';
import {View,StyleSheet,SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import {Feather} from '@expo/vector-icons';

const AccountScreen=()=>{
    const {signout} =useContext(AuthContext);

    return<View style={styles.container}>
    <Text h3>AccountScreen</Text>
        <View style={styles.btnContainer}>
    <Button onPress={signout} title="Sign out" style={styles.btn}/>
        </View>
    </View>
}

const styles=StyleSheet.create({
    btn:{
      margin:30
    },
        container:{
            marginTop:50,
            marginHorizontal:25
        },
    btnContainer:{
      marginTop:50
    }
})
AccountScreen.navigationOptions=()=>{
    return {
        header:null,
        title: 'Account',
        tabBarIcon: <Feather name="user" size={20}/>
    }


}
export default AccountScreen;