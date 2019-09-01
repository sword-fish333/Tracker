import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {AsyncStorage} from 'react-native';
import {navigate} from '../navigationRef';
const authReducer=(state,action)=>{

    switch (action.type){
        case 'add_error':
            return {...state,errorMessage:action.payload};
        case 'signup':
            return {errorMessage:'',token:action.payload};
        case 'signin':

            return {errorMessage:'',token:action.payload};
        case 'clear_error_message':
            return {...state,errorMessage:''};
        case 'signout':
            return {token:null,errorMessage:''}
        default:
            return state;
    }
};

const clearErrorMessage=dispatch=>()=>{
    dispatch({type:'clear_error_message'});
}


const tryLocalSignIn=dispatch=>async ()=>{
    const token=await AsyncStorage.getItem('token');

    if (token){
        dispatch({type:'signin',payload:token});
        navigate('TrackList')
    }else{
        navigate('loginFlow');
    }
}

const signup=(dispatch)=>async({email,password})=>{
      try {
          const response=await trackerApi.post('/signup',{email,password});


          await AsyncStorage.setItem('token',response.data.token);


    dispatch({type:'signup',payload:response.data.token});
          navigate('TrackList');
      }catch (err){
          dispatch({type:'add_error',payload:'Something went wrong with sign up!'})

            console.log('err',err.message);
      }
    }


const signin=(dispatch)=> async({email,password})=>{
        try{
            const response=await trackerApi({
                method: 'post',
                url: '/signin',
                headers: {'Content-Type': 'application/json'},
                data: {email,password}
            });
            dispatch({type:'signin', payload:response.data.token});
            navigate('TrackList');
            await  AsyncStorage.setItem('token',response.data.token);


        }catch(err){
            dispatch({type:'add_error',payload:err.message})
        }
}

const signout=dispatch=>async()=>{
    await  AsyncStorage.removeItem('token');
    dispatch({type:'signout'});
    navigate('loginFlow')
}
export const {Provider,Context}=createDataContext(authReducer,{signup,signin,signout,clearErrorMessage,tryLocalSignIn},{isSignedIn:false,errorMessage:'',token:null});