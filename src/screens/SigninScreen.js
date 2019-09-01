import React,{useContext} from 'react';
import AuthForm from '../components/AuthForm';
import {Context} from '../context/AuthContext';
import NavLink from '../components/NavLink';
import {View,Text,StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';

const SinginScreen=()=>{
const {state,signin,clearErrorMessage}=useContext(Context);

    return <View style={styles.container}>
        <NavigationEvents
        // onWillFocus={()=>{}}
        // onDidFocus={()=>{}}
         onWillBlur={clearErrorMessage}
        // onDidBlur={()=>{}}
        />
        <AuthForm
            headerText="Sign in to your account!"
            errorMessage={state.errorMessage}
            onSubmit={signin}
            submitBtnText="Sign In"
        />
        <NavLink linkText="Dont have an account? Sign up" routeName='Signup'/>
    </View>
}
SinginScreen.navigationOptions=()=>{
    return {
        header:null
    }
}
const styles=StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            marginBottom:200
        }
})

export default SinginScreen;