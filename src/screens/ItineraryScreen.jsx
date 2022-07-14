import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import itineraryStyles from '../styles/itineraryStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import FlipCard from 'react-native-flip-card'

const { width, heith } = Dimensions.get('window')
const CARD_WIDTH = width * 0.8
function ItineraryScreen({ route }) {
    const { item } = route.params
    const price = [...Array(item.price).keys()];
    return (
        <ScrollView style={itineraryStyles.mainContainer}>
            <View style={itineraryStyles.avatarAndName}>
                <Image style={itineraryStyles.avatarItinerary}
                    resizeMode='cover'
                    source={{ uri: item.nameUserAndAvatar[1] }} />
                <Text style={itineraryStyles.nameUser}>Posted by {item.nameUserAndAvatar[0]}</Text>
            </View>
            <View style={itineraryStyles.itineraryDescription}>
                <Text style={itineraryStyles.itineraryTitle}>{item.nameItinerary}</Text>
                <View style={itineraryStyles.priceAndDuration}>
                    <Text style={itineraryStyles.price}>Price:  {item.price === 0 ? <Text>For free</Text> : price.map(i => {
                        return (
                            <Ionicons name='logo-euro' color={'black'} size={15} />
                        )
                    })}</Text>
                    <Text style={itineraryStyles.duration}>Duration: {item.time}Hs</Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={1}
                    pagingEnabled
                >
                    {item.hashtags.map(hash => {
                        return (
                            <TouchableOpacity style={itineraryStyles.hashtagsSlide}><Text style={itineraryStyles.hash}>#{hash}</Text></TouchableOpacity>
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
                    {item.activities.map(activity => {
                        return (
                            <FlipCard
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
                <TouchableOpacity style={itineraryStyles.commentsButton}><Text style={itineraryStyles.commentsButtonText}>Comments</Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}


export default ItineraryScreen