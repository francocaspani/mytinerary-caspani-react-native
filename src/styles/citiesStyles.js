import { StyleSheet, Dimensions } from "react-native";

const {width, heith} = Dimensions.get('window')
const CARD_WIDTH = width * 0.8
const citiesStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    buttonSearch: {
        backgroundColor: 'white',
        top: 180,
        height: 40,
        justifyContent: 'center',
        width: 300,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        zIndex: 20
    },
    textSearch: {
        fontWeight: 'bold'
    },
    scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    card: {
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: 220,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    imgCard: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 2,
        padding: 10,
    },
    cardtitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
    button: {
        alignItems: 'center',
        marginTop: 5
    },
    knowMoreButton: {
        width: '100%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderColor: '#000',
        borderWidth: 1
    },
    textknowMoreButton: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default citiesStyles