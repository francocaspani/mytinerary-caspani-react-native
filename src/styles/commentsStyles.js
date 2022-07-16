import { StyleSheet } from "react-native";

const commentsStyles = StyleSheet.create({
    commentsContainer:{
        flex: 1,
        paddingHorizontal: 10
    },
    commentBox:{
        width: '100%',
        top: 100
    },
    avatarUser:{
        width: 40,
        height: 40,
        borderRadius: 25
    },
    comment:{
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 15,
        padding: 5
    },
    commentReply:{
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 15,
        padding: 5,
        width: '70%'
    },
    commentAndUser:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarAndUser:{
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarAndUserReply:{
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30
    },
    input:{
        height: 40,
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
        padding: 5,
    }
})

export default commentsStyles