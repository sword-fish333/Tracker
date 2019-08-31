import React,{useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button,Input,Text} from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm=({headerText,errorMessage,onSubmit,submitBtnText})=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    return(
        <>
        <Spacer>
            <Text h3>{headerText}</Text>
        </Spacer>
        <Spacer>
            <Input label="Email"
                   autoCapitalize="none"
                   autoCorrect={false}
                   onChangeText={setEmail}/>
        </Spacer>
        <Spacer>
            <Input
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                label="Password" onChangeText={setPassword}/>
        </Spacer>
        <Spacer>
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text>: null}
            <Button  title={submitBtnText} onPress={()=>onSubmit({email,password})}/>
        </Spacer>
        </>
    )
}

const styles=StyleSheet.create({
    error:{
        color:'red',
        fontSize:16,
        marginBottom:15,
        alignSelf:'center'
    },
})

export default AuthForm;