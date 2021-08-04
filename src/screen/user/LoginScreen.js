import React,{useContext,useState} from 'react';
import {View,Text, TextInput,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { Card } from 'react-native-elements';
import ApiContext from '../../function/Api';
import {observer,inject} from 'mobx-react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = (props) => {
    const navigation=useNavigation();
    const {storeConnexion}=props
    const context = useContext(ApiContext);
    const [Pseudo,setPseudo]=useState(''); 
    const [Password,setPassword]=useState(''); 
    const connexion = (Pseudo,Password)=>{
      if(Pseudo!=''&& Password!=""){
        context.PostConnexion(Pseudo,Password,storeConnexion).then(data=>{
         }).catch(err =>{
          console.log('err: '+err) ;
        })
      }
  }

//   componentDidMount = () => {prechargement();}



      return (
        <View style={{flex:1, margin:30, marginTop:50, alignContent:'center', }}>
          <Image borderRadius={30} source={{uri:'https://storage.googleapis.com/kaggle-organizations/1030/thumbnail.png%3Fr=355',}}  style={{width: 350,height: 300, alignSelf:'center'}}/>
          <Card borderRadius={30} marginTop={20}>
              <TextInput style={{margin:10, marginTop:20}} placeholder='Identifiant'  value={Pseudo} onChangeText={(value)=>{setPseudo(value)}}/>
              <Card.Divider/>
              <TextInput style={{margin:10, marginTop:20}} placeholder='Mot de passe' value={Password}secureTextEntry={true} onChangeText={(value)=>{setPassword(value)}}/>
          </Card>
          <TouchableOpacity style={{margin:15, marginTop:25, activeOpacity:0.5, backgroundColor:'#4178ff', borderRadius:10, padding:20}} onPress={()=>{connexion(Pseudo,Password)}}>
            <Text style={{textAlign:'center', color:'white'}}>Connexion</Text>
          </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    logo: {
      width: 66,
      height: 58,
    },
  });
export default inject('storeConnexion')(observer(LoginScreen))
