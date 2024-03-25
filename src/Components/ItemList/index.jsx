import { Container, Title, BtnFavorites, ItemContent, BtnIcon  } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useState } from "react";

export function ItemList({item}){
    return(
        <Container>
            <ItemContent>
                <BtnIcon>
                    <Icon name="music" size={18} color={'#d1c8c8'}/>
                </BtnIcon>
                
                <Title numberOfLines={1} ellipsizeMode="tail">{item}</Title>
            </ItemContent>
        </Container>
    )
}