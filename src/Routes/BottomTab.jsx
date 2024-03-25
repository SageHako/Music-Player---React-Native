import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {ListMusic, MusicPlayer} from '../Pages'

const {Navigator, Screen} = createBottomTabNavigator()

export default function BottomTab(){
    return(
        <Navigator initialRouteName='MusicPlayer' 
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#fff',
                tabBarStyle:{
                    backgroundColor: '#df47b1',
                    position: 'absolute',
                    bottom: 25,
                    height: 60, 
                    width: '90%',
                    borderRadius: 40,
                    padding: 5,
                    margin: 20,
                    },
                }}>
            <Screen 
                name='Músicas'
                component={MusicPlayer}
                options={{
                    tabBarIcon:({color, size})=>{
                        return <Icon name='play' color={color} size={size}/>
                    }
                }}/>

            <Screen 
                name='Lista' 
                component={ListMusic}
                options={{
                    tabBarIcon:({color, size})=>{
                        return <Icon name='list' color={color} size={size}/>
                    }
                }}/>
        </Navigator>
    )
}