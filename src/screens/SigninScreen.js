import React,{useContext} from 'react';
import AuthForm from '../components/AuthForm';
import {Context} from '../context/AuthContext';
import NavLink from '../components/NavLink';
import {View,Text,StyleSheet} from 'react-native';


const SinginScreen=()=>{
const {state,signin}=useContext(Context);

    return <View style={styles.container}>
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