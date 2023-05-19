//configurações do axios

import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-rocketnotes-0gfe.onrender.com"  //endereco do backend rodando no computador
});