import React from 'react';
import {View,StyleSheet,TouchableOpacity, Image} from 'react-native';
import TextNotTooLong from './TextNotTooLong'
import { useNavigation } from '@react-navigation/native';

const MediaComponent = (props) => {
    //Pour un media une page et une fonction on obtient une liste de media 
    const {Title,PictureLink,Id,Media}=props
  
    //Pour utiliser la navigation dans un composant il faut ajouter useNavigation
    const navigation=useNavigation();

    return (
               <TouchableOpacity
                  onPress={()=>{
                    navigation.navigate('DetailsMedia', {
                      media: Media,
                      id:Id ,
                      image:PictureLink,
                    });
                   }}
               >
               <View  >
                  <View >
                     <View style={{margin:2}}>
                       <TextNotTooLong text={Title}/>
                     </View>
                     <Image borderRadius={10}
                      style={styles.tinyLogo}
                      source={{
                      uri: PictureLink,
                      }}
                    />
                  </View>
                </View>    
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 290,
    height: 240,
    marginTop:10,
    margin:3
  },
});
export default MediaComponent
