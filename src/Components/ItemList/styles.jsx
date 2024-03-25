import styled from "styled-components/native";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin: 5px;
`

export const Title = styled.Text`
    flex: 1;
    font-size: 16px;
    color: #fff;
    margin-left: 5px;
`

export const BtnFavorites = styled.TouchableOpacity`
    padding: 10px;
`

export const BtnIcon = styled.TouchableOpacity`
    padding: 10px;
    background-color: gray;
    border-radius: 40px;
`

export const ItemContent = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    border-radius: 8px;
    padding: 20px;
    border-color: #4e4d4d;
    border-bottom-width: 2px;
`
