import { StyleSheet } from "react-native";


const homeStyles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: -100,
        left: 0,
        bottom: 0,
        right: 0,
    },
    containerHome: {
        flex: 1,
        alignItems: 'center',
    },
    hero: {
        textAlign: 'left',
        width: '90%',
        top: '16%',
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        padding: 15
    },
    slide: {
        top: 160,
        height: 400,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        justifyContent: 'center'
    },
    imgSlide: {
        width: '100%',
        height: 300,
    },
    nameCity: {
        position: 'absolute',
        top: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'white',
        top: 130,
        height: 30,
        justifyContent: 'center',
        width: 150,
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        fontWeight: 'bold'
    },
    buttonSearch: {
        backgroundColor: 'white',
        top: 110,
        height: 40,
        justifyContent: 'center',
        width: 300,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row'
    },
    textSearch: {
        fontWeight: 'bold'
    }

})

export default homeStyles