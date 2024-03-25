import Controls from "../../Components/Controls";
import { GetPermissionsSongs } from '../../Components/Permissions'
import { Container } from "./styles";
import { useAudioPlayers } from '../../Components/Controls/useAudioPlayers';
import { useEffect, useState } from 'react';

export function MusicPlayer(){
    const{songs} = GetPermissionsSongs()
    return(
        <Container>
            <Controls songs={songs}/>
        </Container>
    )
}