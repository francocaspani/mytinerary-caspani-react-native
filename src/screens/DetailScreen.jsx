import { View, Text, Image, ScrollView, FlatList, Pressable, TouchableHighlight, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useEffect, useState } from "react";
import citiesActions from '../redux/actions/citiesActions';
import detailStyles from '../styles/detailStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';

export default function DetailScreen({ route, navigation }) {
  const { id } = route.params
  const dispatch = useDispatch()
  const isFocused = useIsFocused();
  const user = useSelector(store => store.usersReducer.userData)
  useEffect(() => {
    dispatch(citiesActions.getOneCity(id))
    dispatch(itinerariesActions.getItinerariesByCity(id))
    // eslint-disable-next-line
  }, [id,isFocused])




  const itinerariesByCity = useSelector(store => store.itinerariesReducer.itinerariesByCity)
  const city = useSelector(store => store.citiesReducer.city)

  const renderItinerary = ({ item }) => {
    const price = [...Array(item.price).keys()];
    return (
      <TouchableOpacity style={detailStyles.itinerary} onPress={() => navigation.navigate('Itinerary', { id: item._id })}>
        <View style={detailStyles.itineraryInfo}>
          <View style={detailStyles.avatarAndName} >
            <Image style={detailStyles.avatarItinerary}
              resizeMode='cover'
              source={{ uri: item.nameUserAndAvatar[1] }} />
            <Text style={detailStyles.nameUser}>{item.nameUserAndAvatar[0]}</Text>
          </View>
          <View style={detailStyles.itineraryDescription}>
            <Text style={detailStyles.nameItinerary}>{item.nameItinerary}</Text>
            <Text>Price:  {item.price === 0 ? <Text>For free</Text> : price.map((i,e )=> {
              return (
                <Ionicons key={e} name='logo-euro' color={'black'} size={15} />
              )
            })}</Text>
            <Text>Duration: {item.time}Hs</Text>
            <View style={detailStyles.hashtags}>{item.hashtags.map((hash, index) => {
              return (
                <Text key={index} style={detailStyles.hash}>#{hash}</Text>
              )
            })}</View>
          </View>
          <View style={detailStyles.likes}>
            <Text style={detailStyles.textLikes}>{item.likes.length}</Text>
            {item?.likes.includes(user?.id)? <Ionicons name="heart" color={'black'} size={30} />:<Ionicons name="heart-outline" color={'black'} size={30} />}
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