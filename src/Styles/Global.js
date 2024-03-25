import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.SafeAreaView`
    background-color: #200342;
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const ContentSafe = styled(SafeAreaView)`
    flex: 1;
`
export const Colors = {
    primary: '#eeeff5',
    secondary: '#200342',
}