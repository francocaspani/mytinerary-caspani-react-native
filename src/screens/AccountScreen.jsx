import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import accountStyles from '../styles/accountStyles';
import usersActions from '../redux/actions/usersActions';


function AccountScreen() {
    const user = useSelector(store => store.usersReducer.userData)
    const dispatch = useDispatch()
    const [password,setPassword] = useState(null)
    const [userName,setUserName] = useState(null)
    console.log(user)
    const HandleSubmit = async () => {
        
        const loggedUser = {
            email: userName,
            password: password,
            from: 'propietary-signup'
        }
        console.log(loggedUser)
            const res = await dispatch(usersActions.logInUser(loggedUser))
            console.warn(res.data)
    }

    return (
        <View style={accountStyles.accountContainer}>
            <View style={accountStyles.logoAndTitle} >
                <Image
                style={accountStyles.logo}
                    source={require('../../assets/logo.png')}
                />
                <Text style={accountStyles.title}>My Tinerary</Text>
            </View>
            <View style={accountStyles.inputContainer}>
                <TextInput
                style={accountStyles.input}
                    placeholder='Email'
                    textContentType= 'emailAddress'
                    value={userName}
                    onChangeText={setUserName}
                />
                <TextInput
                style={accountStyles.input}
                    placeholder='Password'
                    textContentType= 'password'
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                />
            </View>
            <View style={accountStyles.logInContainer}>
                <TouchableOpacity style={accountStyles.logIn} 
                onPress={HandleSubmit}
                ><Text style={accountStyles.logInText}>Log In</Text></TouchableOpacity>
                <Text>Or log in with:</Text>
                <TouchableOpacity style={accountStyles.logIn}><Text style={accountStyles.logInText}>Google</Text></TouchableOpacity>
            </View>
            <View style={accountStyles.logInContainer}>
                <Text style={accountStyles.ctaSignUp}>Not a member? </Text><TouchableOpacity style={accountStyles.ctaSignUpButton}><Text>Sign up</Text></TouchableOpacity>
            </View>
        </View>

    )
}


export default AccountScreen