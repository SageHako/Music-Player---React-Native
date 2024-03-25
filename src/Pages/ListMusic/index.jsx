import { Container, FlatListMusic, TitleMusic, Header } from "./styles";
import { NameMusic } from "../../Components/NameMusic";
import {ItemList} from "../../Components/ItemList";

export function ListMusic(){
    const{name} = NameMusic()

    return(
        <Container>
            <Header>
                <TitleMusic>Biblioteca</TitleMusic>
            </Header>
            <FlatListMusic
                data={name}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => 
                    <ItemList item={item}/>
                }
            />
        </Container>
    )
}