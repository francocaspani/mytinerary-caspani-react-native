import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ImageBackground, View, Text, ScrollView, Image, Pressable } from 'react-native';
import { Video } from 'expo-av';
import homeStyles from '../styles/homeStyles';
import Carousel from 'react-native-snap-carousel';
import citiesActions from '../redux/actions/citiesActions'

function HomeScreen() {
    const dispatch = useDispatch()
    const cities = useSelector(store => store.citiesReducer.cities)
    useEffect(() => {
        dispatch(citiesActions.getCities())
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
                    volume={1}
                    muted={true}
                    resizeMode="cover"
                />
                    <Text style={homeStyles.hero}>Find your perfect trip, designed by insiders who know and love their cities! </Text>
                    <Pressable style={homeStyles.button} 
                    onPress={()=> console.warn('Explore btn clicked')}>
                        <Text>Get me there!</Text>
                    </Pressable>
                    <Carousel
                        layout={'default'}
                        data={cities}
                        renderItem={renderItem}
                        itemWidth={400}
                        sliderWidth={500}
                        itemHeight={400}
                        loop = {true}
                        autoplay= {true}
                        autoplayInterval={5000}
                    />
            </View>
        </>
    )
}


export default HomeScreen