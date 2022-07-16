import commentsStyles from '../styles/commentsStyles';
import { View, Text, FlatList, Image, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import { useEffect, useState } from 'react';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';


function CommentsScreen({ route }) {
    const { id } = route.params
    const { width } = useWindowDimensions();
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


    const tagsStyles = {
        p: {
            fontSize: 20
        }
    }


    const renderComment = ({ item }) => {

        return (
            <View style={commentsStyles.commentBox}>
                <View style={commentsStyles.commentAndUser}>
                    <View style={commentsStyles.avatarAndUser}>

                        <Image style={commentsStyles.avatarUser}
                            resizeMode='cover'
                            source={{ uri: item.userId.avatar }}
                        />
                        <Text>{item.userId.firstName}</Text>
                    </View>
                    <View style={commentsStyles.comment}>
                        <RenderHtml
                            contentWidth={width}
                            tagsStyles={tagsStyles}
                            source={{ html: item.comment }}
                        />
                    </View>
                </View>



                {item.replies.length > 0 ?
                    item.replies.map(reply => {

                        return (
                            <View style={commentsStyles.commentAndUser}>
                                <View style={commentsStyles.avatarAndUserReply}>
                                    <Image
                                        style={commentsStyles.avatarUser}
                                        resizeMode='cover'
                                        source={{ uri: reply.userId.avatar }}
                                    />
                                    <Text>{reply.userId.firstName}</Text>
                                </View>
                                <View style={commentsStyles.commentReply}>
                                    <RenderHtml
                                        contentWidth={width}
                                        source={{ html: reply.comment }}
                                    />
                                </View>
                            </View>
                        )
                    })
                    :
                    <></>
                }

            </View>
        )
    }


    return (
        <View style={commentsStyles.commentsContainer}>
            <FlatList
                data={itinerary?.comments}
                renderItem={renderComment}
                keyExtractor={item => item._id}
            />
            <TextInput style={commentsStyles.input}
                placeholder='Leave a comment'
                autoCapitalize='none' />
        </View>
    )
}


export default CommentsScreen