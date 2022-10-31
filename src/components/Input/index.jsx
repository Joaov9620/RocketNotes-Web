import {Container} from './styles';

export function Input({icon: Icon, ...rest}){
    //{Icon && <Icon size={20}/>}: só mostrar o icone se de fato existir
    return(
        <Container>
           {Icon && <Icon size={20}/>}  
            <input {...rest}/>
        </Container>
    );
};