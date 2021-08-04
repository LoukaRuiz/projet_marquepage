import {observable,action,computed, makeObservable} from 'mobx'
import AsyncStorage from '@react-native-async-storage/async-storage';
class StoreConnexion {
    login='';
    password='';
    sessionId='';
    //login
    getLogin=()=>{
        return this.login;
    }
    setLogin=(unLogin)=>{
        this.login=unLogin;
    }
    //Password
    getPassword=()=>{
        return this.password;
    }
    setPassword=(unPassword)=>{
        this.password=unPassword;
    }
    //Session
     get getSessionId(){
        return this.sessionId;
    }

    setSessionId=(unSession)=>{
        this.sessionId=unSession;
    }
     storeData = async (login,password,idSession) => {
        try {
            this.setLogin(login);
            this.setPassword(password);
            this.setSessionId(idSession);

            const data=[login,password,idSession]
            console.log(data)
            const jsonValue = JSON.stringify(data)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          console.log(e)
        }
      }
   
      getData = async () => {
        try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        return JSON.parse(jsonValue);
        } catch(e) {
          console.log(e)
        }

 
    }
    constructor(){
        makeObservable(this,{
            login:observable,//Listes des tâches en cours
            password:observable,
            sessionId:observable,
            getLogin:action,
            getPassword:action,
            getSessionId:computed,
            setPassword:action,
            setLogin:action,
            setSessionId:action,
            getData:action,
            storeData:action,

        });
    }
}

const storeConnexion = new StoreConnexion();
export {storeConnexion};