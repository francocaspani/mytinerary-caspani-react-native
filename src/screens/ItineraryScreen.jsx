import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, Alert } from 'react-native';
import itineraryStyles from '../styles/itineraryStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import FlipCard from 'react-native-flip-card'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import { useEffect, useState } from 'react';

const { width, heith } = Dimensions.get('window')
const CARD_WIDTH = width * 0.8
function ItineraryScreen({ route, navigation }) {
    const { id } = route.params

    const [reload, setReload] = useState(false)
    const [itinerary, setItinerary] = useState()


    const onClickReload = () =>
        setReload(!reload);

    const user = useSelector(store => store.usersReducer.userData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(itinerariesActions.getOneItineraries(id))
            .then(res => setItinerary(res.data.response.itinerary))
        // eslint-disable-next-line
    }, [reload])

    const handleLike = async () => {
        if (user) {
            const token = await AsyncStorage.getItem('@token')
            const res = await dispatch(itinerariesActions.handleLikes(itinerary._id, token))
        } else {
            Alert.alert(
                "You have to be logged to save this to favourites",
                'Please log in',
                [
                    { text: "OK", onPress: () => navigation.navigate('Account') }
                ]
            );

        }
        onClickReload()
    }



    const price = [...Array(itinerary?.price).keys()];
    return (
        <ScrollView style={itineraryStyles.mainContainer}>
            <View style={itineraryStyles.avatarAndName}>
                <Image style={itineraryStyles.avatarItinerary}
                    resizeMode='cover'
                    source={{ uri: itinerary?.nameUserAndAvatar[1] }} />
                <Text style={itineraryStyles.nameUser}>Posted by {itinerary?.nameUserAndAvatar[0]}</Text>
            </View>
            <View style={itineraryStyles.itineraryDescription}>
                <Text style={itineraryStyles.itineraryTitle}>{itinerary?.nameItinerary}</Text>
                <View style={itineraryStyles.priceAndDuration}>
                    <Text style={itineraryStyles.price}>Price:  {itinerary?.price === 0 ? <Text>For free</Text> : price.map(i => {
                        return (
                            <Ionicons key={i} name='logo-euro' color={'black'} size={15} />
                        )
                    })}</Text>
                    <Text style={itineraryStyles.duration}>Duration: {itinerary?.time}Hs</Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={1}
                    pagingEnabled
                >
                    {itinerary?.hashtags.map((hash,i) => {
                        return (
                            <TouchableOpacity key={i} style={itineraryStyles.hashtagsSlide}><Text style={itineraryStyles.hash}>#{hash}</Text></TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={itineraryStyles.activitiesContainer}>
                <Text style={itineraryStyles.activitiesTitle}>Activities</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={1}
                    pagingEnabled
                    snapToInterval={CARD_WIDTH + 20}
                >
                    {itinerary?.activities.map((activity,i) => {
                        return (
                            <FlipCard
                            key={i}
                                friction={12}
                                flipHorizontal={true}
                                flipVertical={false}
                                perspective={10000}
                            >
                                <View style={itineraryStyles.activitySlide}>
                                    <Text style={itineraryStyles.textSlide}>{activity.name}</Text>
                                    <Image
                                        style={itineraryStyles.activityImg}
                                        resizeMode='cover'
                                        source={{ uri: activity.img }}
                                    />
                                </View>
                                <View style={itineraryStyles.activitySlideSide2}>
                                    <Image
                                        style={itineraryStyles.activityImg}
                                        resizeMode='cover'
                                        source={{ uri: activity.img }}
                                    />
                                    <Text style={itineraryStyles.textSlideSide2}>{activity.description}</Text>
                                </View>
                            </FlipCard>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={itineraryStyles.commentsButtonContainer} >
                <TouchableOpacity style={itineraryStyles.commentsButton}
                    onPress={() => navigation.navigate('Comments', {id: itinerary._id})}
                ><Text style={itineraryStyles.commentsButtonText}>Comments</Text></TouchableOpacity>
                <TouchableOpacity style={itineraryStyles.likeButton}
                    onPress={handleLike}
                >
                    <Text style={itineraryStyles.textLikes}>{itinerary?.likes.length}</Text>
                    {itinerary?.likes.includes(user?.id)? <Ionicons name="heart" color={'black'} size={30} />:<Ionicons name="heart-outline" color={'black'} size={30} />}
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


export default ItineraryScreen