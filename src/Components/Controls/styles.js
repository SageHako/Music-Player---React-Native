import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
`
export const ButtonContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`
export const ButtonControl = styled.TouchableOpacity`
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
`

export const ButtonControlPlay = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding: 20px;
    background-color: #f2499b;
`

export const ProgressContent = styled.View`
    width: 90%;
    margin-bottom: 20px;
`
export const ImageContent = styled.View`
    height: 60%;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const ImageAlbum = styled.Image`
    width: 250px;
    height: 250px;
    background-color: #432aaa;
    border-radius: 150px;
    border: 2px solid #fff;
`
export const TitleAlbum = styled.Text`
    margin: 10px;
    font-weight: bold;
    text-align: center;
    font-size: 16px;
    color: #eeeff5;
    margin: 15px;
`