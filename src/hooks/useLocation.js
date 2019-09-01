import {useState,useEffect} from  'react';
import {Accuracy,requestPermissionsAsync,watchPositionAsync} from 'expo-location';

export default (shouldTrack,callback)=>{
    const [err,setError]=useState(null);

    useEffect(()=>{
        let subscriber;
        const startWatch=async()=>{
            try{
                await requestPermissionsAsync();
                subscriber=await  watchPositionAsync({
                    accuracy:Accuracy.bestForNavigation,
                    timeInterval:1000,
                    distanceInterval:10,
                },callback);
            }catch (err){
                setError(err)
            }
        };

        if(shouldTrack){
            startWatch();
        }else{
            if(subscriber){
                subscriber.remove();

            }
        }
        return ()=>{
            if(subscriber){
                subscriber.remove();
            }
        }
    },[shouldTrack,callback]);


    return [err];
};