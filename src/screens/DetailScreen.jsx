import { View, Text, Image, ScrollView, FlatList, Pressable, TouchableHighlight, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useEffect } from "react";
import citiesActions from '../redux/actions/citiesActions';
import detailStyles from '../styles/detailStyles';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DetailScreen({ route, navigation }) {
  const { id } = route.params
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(citiesActions.getOneCity(id))
    dispatch(itinerariesActions.getItinerariesByCity(id))
    // eslint-disable-next-line
  }, [id])
  const itinerariesByCity = useSelector(store => store.itinerariesReducer.itinerariesByCity)
  const city = useSelector(store => store.citiesReducer.city)

  const renderItinerary = ({ item }) => {
    const price = [...Array(item.price).keys()];
    return (
      <TouchableOpacity style={detailStyles.itinerary} onPress={()=> navigation.navigate('Itinerary', {item : item})}>
        <View style={detailStyles.itineraryInfo}>
          <View style={detailStyles.avatarAndName} >
            <Image style={detailStyles.avatarItinerary}
              resizeMode='cover'
              source={{ uri: item.nameUserAndAvatar[1] }} />
            <Text style={detailStyles.nameUser}>{item.nameUserAndAvatar[0]}</Text>
          </View>
          <View style={detailStyles.itineraryDescription}>
            <Text style={detailStyles.nameItinerary}>{item.nameItinerary}</Text>
            <Text>Price:  { item.price === 0 ?<Text>For free</Text> : price.map(i=>{
              return(
                <Ionicons name='logo-euro' color={'black'} size={15} />
              )
            })}</Text>
            <Text>Duration: {item.time}Hs</Text>
            <View style={detailStyles.hashtags}>{item.hashtags.map(hash=>{
              return(
                <Text style={detailStyles.hash}>#{hash}</Text>
              )
            })}</View>
          </View>
          <View style={detailStyles.likes}>
            <Text style={detailStyles.textLikes}>{item.likes.length}</Text>
            <Ionicons name="heart-outline" color={'black'} size={30} />
          </View>
        </View>


      </TouchableOpacity>
    )
  }





  return (
    <View style={detailStyles.detailContainer}>
      <View style={detailStyles.headerContainer}>
        <Image style={detailStyles.headerImg}
          resizeMode='cover'
          source={{ uri: `https://mytinerary-caspani.vercel.app/assets/img/${city.img}` }} />
        <Text style={detailStyles.detailTitle}>{city.name}</Text>
        <Text style={detailStyles.detailDescription}>{city.country}</Text>
      </View>

      <View style={detailStyles.itineraryContainer}>
        <Text style={detailStyles.itineraryTitle}>Itineraries</Text>
        <FlatList
          data={itinerariesByCity}
          renderItem={renderItinerary}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  )
}