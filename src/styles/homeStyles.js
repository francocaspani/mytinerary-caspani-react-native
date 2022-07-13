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
        top: '20%',
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        padding: 15
    },
    slide: {
        top: 200,
        height: 400,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        justifyContent: 'center'
    },
    imgSlide: {
        width: '95%',
        height: 300,
        borderRadius: 20
    },
    nameCity: {
        position: 'absolute',
        top: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'grey'
    }
})

export default homeStyles