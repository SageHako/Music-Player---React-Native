import { Container, ButtonControl, ButtonContent,
     ButtonControlPlay, ProgressContent, TitleAlbum, ImageContent } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome"
import { Colors } from "../../Styles/Global";
import { useAudioPlayers } from "./useAudioPlayers";
import * as Progress from 'react-native-progress'
import LottieView from "lottie-react-native"

//função de controle de sons
export default function Controls({songs}){
    const{playPause, songIndex, musicStringname, soundTime,
        playSound, pauseSound, nextSound, prevSound, replySound, muteSound} = useAudioPlayers(songs)

    return(
        <Container>
            <ImageContent>
                <LottieView source={require('../../../assets/songAni.json')}
                    autoPlay={playPause}
                    loop={playPause}
                    speed={0.8}
                    style={{ width: 300, height: 300 }}/>
                <TitleAlbum>{musicStringname}</TitleAlbum>
            </ImageContent>
            
            <ProgressContent>
                <Progress.Bar progress={0} width={370} color="#df47b1"/>
                <TitleAlbum>{soundTime}</TitleAlbum>
            </ProgressContent>
            
            <ButtonContent>
                <ButtonControl>
                    <Icon name='refresh'size={20} color={Colors.primary} onPress={replySound}/>
                </ButtonControl>

                <ButtonControl>
                    <Icon name='backward'size={20} color={Colors.primary} onPress={prevSound}/>
                </ButtonControl>
                {playPause ? 
                    <ButtonControlPlay>
                        <Icon name='pause'size={40} color={Colors.primary} onPress={() => pauseSound()}/>
                    </ButtonControlPlay>
                        : 
                    <ButtonControlPlay>                        
                        <Icon name='play'size={40} color={Colors.primary} onPress={ () =>playSound(songIndex)}/>
                    </ButtonControlPlay>
                }
                <ButtonControl>
                    <Icon name='forward'size={20} color={Colors.primary} onPress={() => nextSound()}/>
                </ButtonControl>

                <ButtonControl>
                    <Icon name='volume-off'size={20} color={Colors.primary} onPress={() => muteSound()}/>
                </ButtonControl>
            </ButtonContent>            
        </Container>
    )
}