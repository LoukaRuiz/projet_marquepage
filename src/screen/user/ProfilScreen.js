import React from 'react';
import {View,Text,Image} from 'react-native';
import { Card } from 'react-native-elements';
const ProfilScreen = () => {
     
      return (
        <View style={{flex:1, margin:30, marginTop:50, alignContent:'center', }}>
          <Image borderRadius={30} source={{uri:'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',}}  style={{width: 320,height: 280, alignSelf:'center'}}/>
          <Card borderRadius={30}>
              <Card.Title>Nom Prénom</Card.Title>
              <Card.Divider/>
              <Text style={{fontWeight:'bold'}}>Résumé </Text><Text style={{textAlign:'center'}}>sfgdg</Text>
          </Card>
        </View>
    )
}

export default ProfilScreen
