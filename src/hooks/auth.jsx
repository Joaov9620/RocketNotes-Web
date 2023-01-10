//contexto para compartilhar dados com a aplicação

import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [data, setData] = useState({});

    async function signIn( {email, password} ){
        
        try{
            const response = await api.post("/sessions", {email, password});
            const {user, token} = response.data;

            //salvando os dados no navegador e convertando o objeto de usuario para string
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token);
         
            //inserindo um token do tipo bear de autorização do cabeçalho por padrão de todas as requisição
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({user, token}) 

        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível entrar");
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@rocketnotes:token");
        localStorage.removeItem("@rocketnotes:user");

        setData({});
    }

    //pega os dados do localstorage para deixa salvo
    useEffect(() =>{
        const token = localStorage.getItem("@rocketnotes:token");
        const user = localStorage.getItem("@rocketnotes:user");

        if(token && user){
            api.defaults.headers.authorization = `Bearer ${token}`;

            setData({
                token,
                user:JSON.parse(user)
            });
        }

    }, []);

    return(
        <AuthContext.Provider value={{
                signIn, 
                signOut,
                user:data.user
            }}
        >
            {children} 
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export {AuthProvider, useAuth};