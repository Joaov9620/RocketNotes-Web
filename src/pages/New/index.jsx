import { useState } from 'react';
import {Link} from 'react-router-dom';

import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {Textarea} from '../../components/Textarea';
import {NoteItem} from '../../components/NoteItem';
import {Section} from '../../components/Section';
import {Button} from '../../components/Button';

import {Container, Form} from './styles';

export function New(){
  const [ links, setLinks] = useState([]); //guardar todos os links
  const [newLink, setNewLink] = useState(""); //armazenar o novo link

  function handleAddLink(){
    //prevState = estado anterior. Despesja o estado anterior com o newLink
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  };

  //retornar todos os links removendo o que é para deletar
  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted))
  };
  
  return(
      <Container>
        <Header/>

        <main>
            <Form>
                <header>
                    <h1>Criar nota</h1>
                    <Link to="/">voltar</Link>
                </header>

                <Input placeholder="Título"/>
                <Textarea placeholder="Observações"/>

                <Section title="Links úteis">
                  {
                    //index = posição do elemento dentro da lista
                    links.map((link, index) => (
                      <NoteItem 
                        key={String(index)}
                        value= {link}
                        //se for chamar uma função que tem parametro tem que usar a arry function
                        onClick= {() => handleRemoveLink(link)}
                      />
                    ))
                  }
                  <NoteItem 
                    isNew 
                    placeholder="Novo link"
                    value= {newLink}
                    onChange= {e => setNewLink(e.target.value)}
                    onClick= {handleAddLink}
                  />
                </Section>

                <Section title="Marcadores">
                  <div className='tags'>
                    <NoteItem value="react"/>
                    <NoteItem isNew placeholder="Novo marcador"/>
                  </div>
                </Section>

                <Button title="Salvar"/>
            </Form>
        </main>
      </Container>  
    );
}