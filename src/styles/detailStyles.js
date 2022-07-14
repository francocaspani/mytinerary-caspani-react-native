import { StyleSheet, Dimensions } from "react-native";

const {width, heith} = Dimensions.get('window')
const detailStyles = StyleSheet.create({
    headerContainer:{
        justifyContent: 'flex-start',
        alignItems:'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    headerImg:{
        height: 320,
        width: '100%',
    },
    detailTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        color: 'white',
        width: '100%',
        textAlign: 'center'
    },
    detailDescription:{
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        color: 'white',
        width: '100%',
        textAlign: 'center'
    },
    detailContainer:{
        flex: 1,
        width: width
    },
    itineraryContainer:{
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        width: width
    },
    itineraryTitle:{
        fontSize: 25,
        fontWeight: "500",
        width: '100%',
        textAlign: 'center',
    },

    itinerary: {
        height: 150,
        width: width,
        marginTop: 5
    },
    nameItinerary:{
        fontSize: 20,
        fontWeight: '500',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    avatarItinerary:{
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    itineraryInfo:{
        flexDirection: 'row',
        marginLeft: 5
    },
    avatarAndName:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginRight: 10,
    },
    nameUser:{
        textAlign: "center"
    },
    itineraryDescription:{
        flex:3,
    },
    hashtags:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    hash:{
        fontSize: 15,
        marginRight: 5
    },
    likes:{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
        flexDirection: 'row'
    },
    textLikes:{
        fontSize: 25,
    }
})

export default detailStyles