import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab";

export default function Routes({playSound}){
    return(
        <NavigationContainer>
            <BottomTab/>
        </NavigationContainer>
    )
}