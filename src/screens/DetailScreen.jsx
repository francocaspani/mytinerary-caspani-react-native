import { View, Text } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useEffect } from "react";
import citiesActions from '../redux/actions/citiesActions';

export default function DetailScreen({route,navigation}) {
    const {id} = route.params
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(citiesActions.getOneCity(id))
        dispatch(itinerariesActions.getItinerariesByCity(id))
        // eslint-disable-next-line
    }, [id])
    const itinerariesByCity = useSelector(store => store.itinerariesReducer.itinerariesByCity)
    const city = useSelector(store => store.citiesReducer.city)
  return (
    <View>
      <Text>DetailScreen</Text>
      <Text>{city.name}</Text>
    </View>
  )
}