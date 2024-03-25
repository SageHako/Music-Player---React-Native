import { GetPermissionsSongs } from "../Permissions";

export function NameMusic(){
    const{songs} = GetPermissionsSongs()

    const name = songs.map( item =>{
        const parts = item.split('/')
        const nameMusic = parts[parts.length - 1]
        return nameMusic.replace('.mp3', '')
    })
    return { name }
}