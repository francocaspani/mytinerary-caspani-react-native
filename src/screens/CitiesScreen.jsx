import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, TextInput, KeyboardAvoidingView, Image, ScrollView, TouchableOpacity, Dimensions, Animated } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import citiesStyles from '../styles/citiesStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import citiesActions from '../redux/actions/citiesActions';

const { width, heith } = Dimensions.get('window')
const CARD_WIDTH = width * 0.8
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

function CitiesScreen({navigation}) {

    const [location, setLocation] = useState({
        latitude: -37.9701476,
        longitude: 144.4913195,
        latitudeDelta: 15.0922,
        longitudeDelta: 15.0421,
    });
    const map = useRef(null)
    const scrollView = useRef(null);
    const [input, setInput] = useState('');
    const dispatch = useDispatch()


    const cities = useSelector(store => store.citiesReducer.citiesFiltered)

    useEffect(() => {
        dispatch(citiesActions.filterCities(input))
        // eslint-disable-next-line
    }, [input])

    useEffect(() => {
        setLocation({
            latitude: cities.length > 0 ? cities[0].latitude: -37.9701476,
            longitude: cities.length > 0 ? cities[0].longitude: 144.4913195,
            latitudeDelta: 15.0922,
            longitudeDelta: 15.0421,
        })
        // eslint-disable-next-line
    }, [cities])



    let mapIndex = 0;
    let mapAnimation = new Animated.Value(0);

    useEffect(() => {
        mapAnimation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= cities.length) {
                index = cities.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(regionTimeout);

            const regionTimeout = setTimeout(() => {
                if (mapIndex !== index) {
                    mapIndex = index;
                    const coordinate = cities[index];
                    map.current.animateToRegion(
                        {
                            ...coordinate,
                            latitudeDelta: location.latitudeDelta,
                            longitudeDelta: location.longitudeDelta,
                        },
                        800
                    );
                }
            }, 10);
        });
    });

    const onMarkerPress = (mapEventData) => {
        const markerID = mapEventData._targetInst.return.key
        let x = (markerID * CARD_WIDTH) + (markerID * 20);
        if (Platform.OS === 'ios') {
            x = x - SPACING_FOR_CARD_INSET;
        }

        scrollView.current.scrollTo({ x: x, y: 0, animated: true, behavior: 'smooth' });
    }

    return (
        <View style={citiesStyles.container}>
            <View style={citiesStyles.buttonSearch}
                onPress={() => console.warn('Explore btn clicked')}>
                <Ionicons name='search' color={'blue'} size={20} />
                <TextInput
                    style={citiesStyles.textSearch}
                    placeholder='Where are you going?'
                    placeholderTextColor='#000'
                    onChangeText={setInput}
                    value={input}
                />
            </View>
            <MapView style={citiesStyles.map}
                region={location}
                zoomEnabled={true}
                ref={map}
                showsMyLocationButton={true}
            >
                {cities?.map((city, index) => {
                    return (
                        <Marker
                            key={index}
                            coordinate={{ latitude: city.latitude, longitude: city.longitude }}
                            image={require('../../assets/marker.png')}
                            onPress={(e) => onMarkerPress(e)}
                        />
                    )

                })}


            </MapView>
            <Animated.ScrollView
                ref={scrollView}
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                style={citiesStyles.scrollView}
                pagingEnabled
                snapToInterval={CARD_WIDTH + 20}
                snapToAlignment='center'
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset:
                                    { x: mapAnimation, }
                            }
                        }
                    ], { useNativeDriver: true }
                )}
            >
                {cities?.map((city, index) => (
                    <View style={citiesStyles.card} key={index}>
                        <Image source={{ uri: `https://mytinerary-caspani.vercel.app/assets/img/${city.img}` }}
                            style={citiesStyles.imgCard}
                            resizeMode='cover'
                        />
                        <View style={citiesStyles.textContent}>
                            <Text numberOfLines={1} style={citiesStyles.cardTitle}>{city.name}</Text>
                            <Text numberOfLines={1} style={citiesStyles.cardDescription}>{city.country}</Text>
                        </View>
                        <View style={citiesStyles.button}>
                            <TouchableOpacity style={citiesStyles.knowMoreButton} onPress={()=>navigation.navigate('Details', {id:city._id})}>
                                <Text style={citiesStyles.textknowMoreButton}>Know more</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </Animated.ScrollView>
        </View>
    )
}

export default CitiesScreen