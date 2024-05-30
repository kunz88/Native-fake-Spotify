import { UserResponse } from "@/model/user";
import axios, { AxiosResponse } from "axios";

// UILIZIAMO UN AGENT PER CENTRALIZZARE TUTTE LE NOSTRE CHIAMATE ALLE API
// EVITANDO RIDONDANZA DEL CODICE

// opzione per l'url base per tutte le chiamate di axios
axios.defaults.baseURL = 'http://192.168.10.3:3000';

// opzione per ricezione di cookies
 axios.defaults.withCredentials = true; 

// funzione per simulare un ritardo nel loading delle pagine
export const sleep = () => new Promise(resolve => setTimeout(resolve , 2000));


axios.interceptors.response.use(async response => {
    await sleep();
    return response
}) 

// callback per fetchare il body all'interno di una resposta
const responseBody = (response: AxiosResponse) => response.data;

// oggetto che contiene tutti i metodi per effettuare una richiesta
const request = {
    get: (url:string) => axios.get(url).then(responseBody),
    post: (url:string,body: object) => axios.post(url,body,{
        withCredentials: false 
      }).then(responseBody),
    
    put: (url:string,body: object) => axios.put(url,body).then(responseBody),
    delete: (url:string) => axios.delete(url).then(responseBody)

}

const SignUp = {
    signin:(body:object) => request.post('auth/signup',body),
    mailvalidation:(uuid:string) => request.get(`auth/emailValidation/${uuid}`)
}
const SignIn = {
    signin: (body:object) => request.post('auth/login',body),
}

 
// oggetto che contiene Catalog

const agent = {
    SignIn,
    SignUp
}


export default agent

/* utente da autenticare :
{
  name: 'carlo',
  email: 'carlo@yahoo.it',
  password: '$2b$10$yl1wG0GdUgrEka5sgzgFJe4HV1jW4x1e0ByVzfhSWMuwZ9/UynRQi',
  confirmedMail: false,
  avatar: 'https://gravatar.com/avatar/1a67cf879f3db3e6f2ecf38d6455152a?s=400&d=robohash&r=x',
  _id: new ObjectId('65fc746da6d0ecc7441db550')

}
  {name: 'carlo', email: 'carlo@yahoo.it', 
  avatar: 'https://gravatar.com/avatar/1a67cf879f3db3e6f2ecf38d6455152a?s=400&d=robohash&r=x',
   password: 'Yoq@ndowi21389G'}
} */