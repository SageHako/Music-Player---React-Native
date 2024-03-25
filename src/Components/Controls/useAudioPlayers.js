import { useState, useEffect } from "react";
import { Audio } from "expo-av";

export function useAudioPlayers(songs){
    const[sound, setSound] = useState(null)
    const[playPause, setPlayPause] = useState(false)
    const[songIndex, setSongIndex] = useState(0)
    const[soundPosition, setSoundPosition] = useState(0)
    const[soundTime, setSoundTime] = useState()
    const[progressCont, setProgressCont] = useState(0)
    const[musicStringname, setmusicStrinName] = useState('')

    useEffect(() => {
        return sound ? async () => {
          await sound.unloadAsync();
        } : undefined;
    }, [sound]);

    const playSound =  async(index)=>{
        try{
            if(sound){
                await sound.unloadAsync()
            }
            const{ sound: newSound } = await Audio.Sound.createAsync(
                {uri: songs[index]}
            )            
            setSound(newSound)

            //verifica se há alguma ponto de reprodução de audio
            if(soundPosition){
                await newSound.playFromPositionAsync(soundPosition)
            }else{
                await newSound.playAsync()
            }
            const { durationMillis} = await newSound.getStatusAsync()
            progressContent(durationMillis)
            setPlayPause(true)
            nameMusic(songs[index])

        }catch(erro){
            console.log(erro)
        }  
    }

    const pauseSound = async() =>{
        if(sound){
            const status = await sound.getStatusAsync()
            const position = status.positionMillis
            await sound.pauseAsync()
            setSoundPosition(position)
            setPlayPause(false)
        }          
    }
    //proxima musica
    const nextSound = async()=>{
        const nextIndex = (songIndex + 1) % songs.length
        setSongIndex(nextIndex)     
        playSound(nextIndex)
    }
    //musica anterior
    const prevSound = async ()=>{
        const prevIndex = (songIndex - 1)%songs.length
        setSongIndex(prevIndex)
        playSound(prevIndex)
    }
    //repete a musica
    const replySound = async()=>{
        playSound(songIndex)
    }

    const muteSound = async()=>{
        if(sound){
            sound.setVolumeAsync(15)
        }
    }

    //monta o nome da musica
    const nameMusic = (name) =>{
        const music = name.split('/')
        const nome = music[music.length - 1]
        const nomeCompleto = nome.replace('.mp3', '')
        setmusicStrinName(nomeCompleto)
    }
    
    const progressContent = async(durationMillis) =>{
        const durationSeconds = durationMillis / 1000
        const durationMinutes = (durationSeconds/60)
        const minutes = Math.floor(durationMinutes)
        const seconds = Math.round((durationMinutes - minutes)*60)
        setSoundTime(`${minutes}:${seconds}`)
    }

    return{
        sound,
        songIndex,
        playPause,
        soundPosition,
        musicStringname,
        soundTime,
        playSound, 
        pauseSound,
        nextSound,
        prevSound,
        replySound,
        muteSound    
    }
}