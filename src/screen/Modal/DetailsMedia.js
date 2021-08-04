import React,{useContext,useEffect,useState}from 'react';
import {View,Text,Image ,StyleSheet,ScrollView, TouchableOpacity, Linking } from 'react-native';
import ApiContext from '../../function/Api';
import { ListItem } from 'react-native-elements'
import { Card,Icon } from 'react-native-elements';
import { color } from 'react-native-reanimated';

const DetailsMedia = (props) => {
    const context = useContext(ApiContext);
    const {route,navigation}=props
    const {media,id,image}=route.params
    const [GenreList,SetGenreList]=useState([])
    const [Nom,setNom]=useState('');
    const [desc,setDescription]=useState("");
    const [VoteAverage,setVoteAverage]=useState("");
    const [VoteCount,setVoteCount]=useState("");
    const [ReleaseDate,setReleaseDate]=useState("");
    const [MediaState,setMediaState]=useState("");
    const [CountryProd,setCountryProd]=useState("");
    const [OriginalLang,setOriginalLang]=useState("");
    const [Benefice,setBenefice]=useState("");
    const [Budget,setBudget]=useState("");
    const [HomePage,setHomePage]=useState("");
    const [CompanyList,setCompanyList]=useState([]);
    const [IdMedia,setIdMedia]=useState("");
    const [IsFavorite, setIsPress ] = useState(true);
    const [IsMovie, setIsMovie ] = useState(false);
    
    useEffect(() => {
      context.GetDetails(media,id).then(res=>{
        if(media==="movie"){
          setNom(res.title)
          let tmpBenefice = (res.revenue/100).toFixed(2)
          if(res.revenue == ""){setBenefice("Information non disponible")}
          else{setBenefice("$ "+tmpBenefice.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))}

          let tmpBudget = res.budget
          if(res.budget == ""){setBudget("Information non disponible")}
          else{setBudget("$ "+tmpBudget)}
        }
        else{
          setNom(res.name)
          setBudget("Information non disponible")
          setBenefice("Information non disponible")
        }
        setVoteCount(res.vote_count)
        setVoteAverage(res.vote_average)
        setReleaseDate(res.release_date)
        if(res.overview == "") {setDescription("Aucune description disponible")}
        else {setDescription(res.overview)}
        if(res.status==="Rumored"){setMediaState("Rumeur en cours")}
        else if(res.status=="Planned") {setMediaState("Plannifié")}
        else if(res.status=="In Production") {setMediaState("En production")}
        else if(res.status=="Post Production") {setMediaState("Publié prochainement")}
        else if(res.status=="Released") {setMediaState("Publié")}
        else if(res.status=="Canceled") {setMediaState("Annulé")}
        else{setMediaState("Aucune notification")}
        
        if(res.production_countries.iso_3166_1 == "") {setCountryProd("Information non disponible")}
        else {setCountryProd(res.production_countries[0].iso_3166_1)}

        if(res.original_language == ""){setOriginalLang("Information non disponible")}
        else{setOriginalLang(res.original_language)}
        
        if(res.homepage == ""){setHomePage("Information non disponible")}
        else{setHomePage(res.homepage)}

        if(res.seasons == null) {setIsMovie(true)}
        else {setIsMovie(false)}
        setIdMedia(res.id)
        setCompanyList(res.production_companies)
        SetGenreList(res.genres)
      }).catch(err =>{
       console.log('err: ' +err) ;
     })
  },[]);


  const OpenWEB = (url) => {
    Linking.openURL(url);
  };

  const Favoris = (id, movie)=>{
    if(movie)
    {
      if(IsFavorite == false) {
        setIsPress(true)
        context.AddFavorite(id,"movie",IsFavorite)
      }
      else {
        setIsPress(false)
        context.AddFavorite(id,"movie",IsFavorite)
      }
    }
    else
    {
      if(IsFavorite == false) {
        setIsPress(true)
        context.AddFavorite(id,"tv",IsFavorite)
      }
      else {
        setIsPress(false)
        context.AddFavorite(id,"tv",IsFavorite)
      }
    }

    
    
  };

      return (
        <View  style={{flex:1, margin:5, marginTop:20}}>
          <Image style={styles.tinyLogo} borderRadius={30} source={{uri: image}}/>
          <ScrollView>
          <Card borderRadius={30}>
            <Card.Title>{Nom}</Card.Title>
            <Card.Title>{ReleaseDate}</Card.Title>
            <Card.Divider/>
            <Text style={{fontWeight:'bold'}}>Résumé </Text><Text style={{textAlign:'center'}}>{desc}</Text>
          </Card>
          <Card borderRadius={30}>
            <Card.Title>Note</Card.Title>
            <Card.Divider/>
            <Text style={{textAlign:'center'}}>{VoteAverage} / 10</Text>
          </Card>
          <Card borderRadius={30}>
            <Card.Title>Nombre de votes</Card.Title>
            <Card.Divider/>
            <Text style={{textAlign:'center'}}>{VoteCount}</Text>
          </Card>
          <Card borderRadius={30}>
            <Card.Title>Ajouter au favorie</Card.Title>
            <Card.Divider/>
            <Icon color={IsFavorite?'grey':'red'} onPress={()=>{Favoris(IdMedia, IsMovie)}} size={23} name={Platform.OS === 'android' ? 'star' : 'ios-star'}></Icon>
          </Card>

          <Card borderRadius={30}>
            <Card.Title>Statut</Card.Title>
            <Card.Divider/>
            <Text style={{textAlign:'center'}}>{MediaState}</Text>
          </Card>

          <Card borderRadius={30}>
            <Card.Title>Informations</Card.Title>
            <Card.Divider/>
            <Text>Pays de production: {CountryProd}</Text>
            <Text>Langue: {OriginalLang}</Text>
            <Text>Budget: {Budget}</Text>
            <Text>Recette: {Benefice}</Text>
            <Text onPress={()=>{OpenWEB(HomePage)}}>Site officel: {HomePage}</Text>
          </Card>

          <Card borderRadius={30}>
            <Card.Title>Genres</Card.Title>
            <Card.Divider/>
            <View>
            {
              GenreList.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))
            }
          </View>
          </Card>

          <Card borderRadius={30}>
            <Card.Title>Compagnies de production</Card.Title>
            <Card.Divider/>
            <View>
            {
              CompanyList.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.iso_3166_1}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }
          </View>
          </Card>

          <TouchableOpacity style={{margin:15, activeOpacity:0.5, backgroundColor:'#4178ff', borderRadius:10, padding:20}} onPress={()=>{navigation.goBack();}}>
            <Text style={{textAlign:'center', color:'white'}}>Retour</Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
    )
}

export default DetailsMedia
const styles = StyleSheet.create({
  tinyLogo: {
    height: 300,
    marginTop:20,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    alignItems:'center'
  },
});
