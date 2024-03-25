import * as MediaLibrary from 'expo-media-library';
import { useEffect, useState } from 'react';

export function GetPermissionsSongs(){
    const[songs, setSongs] = useState([])

    useEffect( ()=>{
        const getPermissions = async () =>{
        const permissionResult = await MediaLibrary.requestPermissionsAsync()
        if(permissionResult.granted){
            const media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
        })
        const uris = media.assets.map(item => item.uri)
        setSongs(uris)
      }
    }
        getPermissions()
    }, [])

    return{ songs }
}