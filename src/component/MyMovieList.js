import React,{useState,useEffect} from 'react';
import {View,StyleSheet, ScrollView, Text} from 'react-native';
import ApiContext from '../function/Api';
import MediaComponent from './MediaComponent';
const MyMovieList = (props) => {
    //Pour un media une page et une fonction on obtient une liste de media 
    const {Media,page,fonction}=props
    //On définie les state utile à l'application
    const [MediaList,SetMedia] = useState([]);
    const [ComponentTitle,SetTitle]=useState('');
    const context = React.useContext(ApiContext);

    useEffect(() => {
        fetchPostDetails().then(res=>{
          const {data:{results}}=res;
          SetMedia(results)
        }).catch(err =>{
          console.log('err: ') ;
        })
     
    },[]);

    const fetchPostDetails = async () => {
       try {
         let data=[""];
        switch (fonction) {
          case 'Popular':
             data =context.getPopular(Media,page);
             SetTitle("Les plus populaire");
            break;
          case 'Latest':
             data= context.getLatest(Media,page);
             SetTitle("Les Plus récents");
            break;
          case 'TopRated':
            data= context.getTopRated(Media,page);
             SetTitle('Les meilleurs notes');
            break;
          case 'Trend':
             data= context.GetTrend(Media,page);
             SetTitle('Les tendances');
            break;
        }
         return data
       } catch (err) {
         throw err;
       }
    };
      return (
        <View style={{flex:1}}>
             <View style={{flex:0.1,marginTop:20}}>
             <Text style={{fontSize:25,fontWeight: "bold"}}>{ComponentTitle}</Text>
            </View>
        <ScrollView horizontal={true} style={{marginTop:20}}  >
              {
                MediaList?.map((media, key) => {
                      if(Media==="movie"){
                      return (
                        <MediaComponent style={{margin:10}} key={media.id}Id={media.id}Title={media.title} PictureLink={context.GetPictureLink(media.backdrop_path)}Media={Media}/>
                        );
                      }else{
                        return (
                        <MediaComponent style={{margin:10}} key={media.id}Id={media.id}Title={media.name} PictureLink={context.GetPictureLink(media.backdrop_path)}Media={Media}/>
                       );
                  }
                })   
              }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 180,
    height: 150,
    marginTop:20,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
export default MyMovieList
