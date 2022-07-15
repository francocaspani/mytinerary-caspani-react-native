import { StyleSheet, Dimensions } from "react-native";
const {width, heith} = Dimensions.get('window')
const itineraryStyles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        top: 100,
        paddingHorizontal: 20
    },
    avatarItinerary:{
        height: 110,
        width: 110,
        borderRadius: 100
    },
    nameUser:{
        fontSize: 16,
        marginTop: 10
    },
    avatarAndName:{
        alignItems: 'center',
    },
    itineraryDescription:{
        width: '100%',
    },
    itineraryTitle:{
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center'
    },
    priceAndDuration:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    price:{
        fontSize: 20
    },
    duration:{
        fontSize: 20
    },
    hashtagsSlide:{
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 20
    },
    activitySlideSide2:{
        elevation: 2,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginHorizontal: 10,
        shadowColor: "#000",
        height: 300,
        width: width * 0.8,
        overflow: "hidden",
    },
    activitiesTitle:{
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 5
    },
    textSlideSide2:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        padding: 20
    },
    activitySlide:{
        elevation: 2,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginHorizontal: 10,
        shadowColor: "#000",
        height: 300,
        width: width * 0.8,
        overflow: "hidden",
    },
    activityImg:{
        height: '100%',
    },
    textSlide:{
        textAlign: 'center',
        fontWeight: '700',
        position: 'absolute',
        bottom: 0,
        zIndex: 3,
        color: 'white',
        fontSize: 20,
        margin: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        width: '100%'
    },
    commentsButton:{
        width: "60%",
        backgroundColor: '#FFF',
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    commentsButtonContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        flexDirection:  'row'
    },
    commentsButtonText:{
        fontSize: 20,
        fontWeight: '500'
    },
    likeButton:{
        width: "30%",
        backgroundColor: '#FFF',
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:  'row',
        marginLeft: 10
    }

})

export default itineraryStyles