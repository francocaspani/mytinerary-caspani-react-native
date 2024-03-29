import { StyleSheet } from "react-native";


const homeStyles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: -100,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1
    },
    containerHome: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        top: 260,
        height: 250,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        justifyContent: 'center'
    },
    imgSlide: {
        width: '100%',
        height: 200,
    },
    nameCity: {
        position: 'absolute',
        bottom: 1,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonText: {
        fontWeight: 'bold'
    },
    buttonSearch: {
        position: 'absolute',
        backgroundColor: 'white',
        top: 70,
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