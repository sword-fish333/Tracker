import React,{ useContext} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';
const SignupScreen=()=>{


    const {state,signup,clearErrorMessage}=useContext(AuthContext);


    return <View style={styles.container}>
        <NavigationEvents
            onWillBlur={clearErrorMessage}
            />
            <AuthForm headerText="Sign up for Tracker" submitBtnText="Sign up" errorMessage={state.errorMessage}
           //signup=({email,password})=>{signup({email,password})}
            onSubmit={signup}
            />
            <NavLink linkText="Already have an account? Log in!" routeName="Signin"/>
    </View>
}

const styles=StyleSheet.create({
    container:{

        flex:1,
        justifyContent:'center',
        marginBottom:200
    },


})
SignupScreen.navigationOptions=()=>{
    return {
        header:null
    }
}


export default SignupScreen;