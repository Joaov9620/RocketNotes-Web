import { Container, Profile } from "./styles";

export function Header(){
    return (
        <Container>
            <Profile>
                <img
                 src="https://github.com/Joaov9620.png"
                 alt="Foto do usuário"
                />

                <div>
                    <samp>Bem-vindo</samp>
                    <strong>João Victor Pereira</strong>
                </div>
            </Profile>
        </Container>
    )
}