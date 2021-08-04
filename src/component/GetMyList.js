import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text,Button } from 'react-native';
import ApiContext from '../function/Api';

const GetMyList = (props) => {
  const navigation=useNavigation();
  
  //Pour un media une page et une fonction on obtient une liste de media 
  const { Media, fonction } = props
  //On définie les state utile à l'application
  const [MediaList, SetMedia] = useState([]);
  const [ComponentTitle, SetTitle] = useState('');
  //on va utiliser la fonction fetchPostDetails dans le useeffect
  useEffect(() => {
    fetchPostDetails().then(res => {

    }).catch(err => {
      console.log('erreur');
    })

  }, []);
  const   renderElement=()=>{
    if( MediaList.length== 0){
      return <Button title="Votre liste vide cliquez ici pour en ajouter "
      onPress={()=>{
       navigation.navigate('AddMedia',{
          fonction:fonction,
       })
      }}
      
      />;
    }
    return (      
    <ScrollView horizontal={true} style={{ marginTop: 20,borderRadius:1 }}  >
    {
      MediaList?.map((media, key) => {   
        return{
        }
      })
    }
  </ScrollView>);
 }
  const fetchPostDetails = async () => {
    try {
      let data = [""];
      switch (fonction) {
        //Fonction qui sort les films série manga des listes
        case 'MyMangaList':
          data = [];
          SetTitle("Mes Mangas");
          break;
        case 'MyAnimeList':
          data = [];
          SetTitle("Mes Animés");
          break;
        case 'MyTvList':
          data = [];
          SetTitle("Mes Séries");
          break;
        case 'MyMovieList':
          data = [];
          SetTitle('Mes Films');
          break;
        case 'MycomicsList':
          data = []
          SetTitle('Mes Comics');
          break;

      }
      return data
    } catch (err) {
      throw err;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1, marginTop: 20,marginBottom:20 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{ComponentTitle}</Text>
      </View>
      {renderElement()}
    </View>
  )
}

export default GetMyList
