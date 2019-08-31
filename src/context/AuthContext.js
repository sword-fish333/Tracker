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
        default:
            return state;
    }
};

const signup=(dispatch)=>async({email,password})=>{
      try {
          const response=await trackerApi.post('/signup',{email,password});
      await AsyncStorage.setItem('token',response.data.token);

    dispatch({type:'signup',payload:response.data.token});
          navigate('TrackList');
      }catch (err){
          dispatch({type:'add_error',payload:'Something went wrong with sign up!'})


      }
    }



const signin=(dispatch)=>{

    return async({email,password})=>{
console.log('email',email,'pass',password);
        try{
            const response=await trackerApi.post('/signin',{email,password});
            await AsyncStorage.setItem({token:response.data.token});
            dispatch({type:'signin', payload:response.data.token});
            navigate('TrackList');
        }catch(err){
            dispatch({type:'add_error',payload:err.message})
        }
    }
}

const signout=(dispatch)=>{
    return ()=>{

    }
}
export const {Provider,Context}=createDataContext(authReducer,{signup,signin,signout},{isSignedIn:false,errorMessage:'',token:null})