import {RiShutDownLine} from 'react-icons/ri'  //biblioteca de icones
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return (
        <Container>
            <Profile to="/profile">
                <img
                 src="https://github.com/Joaov9620.png"
                 alt="Foto do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>João Victor Pereira</strong>
                </div>
            </Profile>
            <Logout>
                <RiShtDownLine/>
            </Logout>
        </Container>
    )
}