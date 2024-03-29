import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ImageBackground, View, Text, ScrollView, Image, Pressable, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import homeStyles from '../styles/homeStyles';
import Carousel from 'react-native-snap-carousel';
import citiesActions from '../redux/actions/citiesActions'
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen({ navigation }) {
    const dispatch = useDispatch()
    const cities = useSelector(store => store.citiesReducer.cities)
    useEffect(() => {
        dispatch(citiesActions.getCities())
        if (AsyncStorage.getItem('@token') !== null) {
            const token = AsyncStorage.getItem('@token')

            const verifyToken = async () => {
                await dispatch(usersActions.verifyToken(token))
            }
            verifyToken()
        }
    }, [])

    const renderItem = ({ item, index }) => {
        return (
            <View style={homeStyles.slide} >
                <Image
                    style={homeStyles.imgSlide}
                    source={{
                        uri: `https://mytinerary-caspani.vercel.app/assets/img/${item.img}`
                    }} />
                <Text
                    style={homeStyles.nameCity}
                >{item.name}</Text>
            </View>
        )
    }
    return (
        <>
            <View style={homeStyles.containerHome}>
                <Video
                    style={homeStyles.backgroundVideo}
                    source={require('../../assets/bgvideo.mp4')}
                    rate={1}
                    shouldPlay={true}
                    isLooping={true}
                    muted={true}
                    resizeMode="cover"
                />
                <Pressable style={homeStyles.buttonSearch}
                    onPress={() => navigation.navigate('Cities')}>
                    <Ionicons name='search' color={'blue'} size={20} />
                    <Text style={homeStyles.textSearch}>Where are you going?</Text>
                </Pressable>
                <Text style={homeStyles.hero}>Find your perfect trip, designed by insiders who know and love their cities! </Text>
                <Carousel
                    layout={'default'}
                    data={cities}
                    renderItem={renderItem}
                    itemWidth={400}
                    sliderWidth={500}
                    itemHeight={200}
                    loop={true}
                    autoplay={true}
                    autoplayInterval={5000}
                />
            </View>
        </>
    )
}


export default HomeScreen