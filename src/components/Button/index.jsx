import { Container } from "./styles";

// ...rest =  para não ficar dizendo todas as propiedades do botão
//loading = false :  se o loading não for informado o padrão é falso
export function Button({title, loading = false, ...rest}){
    return(
     <Container 
        type= "button" 
        disabled={loading} //quando clicar no botão mostrar que está sendo carregado enquando não carregado o requisito
        {...rest} //qualquer outra propiedade que não foi informado posso inserir ela nos componentes
      >
       {loading?'Carregando...':title}
      </Container>
    )
}