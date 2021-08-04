import {View,Text } from 'react-native';
import React,{useState,useEffect} from 'react';

const TextNotTooLong = (props) => {
     const {text}=props;
     const [StateText,SetText] = useState("");

     useEffect(() => {
        if (text.length>20 && text.length<=30) {
              SetText(text.substr(0,text.length/1.5)+"...")
        }else{
            if(text.length>30 && text.length<70){
                SetText(text.substr(0,text.length/1.75)+"...")
            }else{
                SetText(text)
            }
        }
    }         
    ,[]);

      return (
        <View style={{flex:1,margin:25}} >
            <Text style={{fontWeight: "bold",textAlign:"center"}}>{StateText}</Text>
        </View>
    )
}

export default TextNotTooLong
