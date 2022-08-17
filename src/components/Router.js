import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CitiesScreen from '../screens/CitiesScreen';
import AccountScreen from '../screens/AccountScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useColorScheme } from 'react-native';
import DetailScreen from '../screens/DetailScreen';
import ItineraryScreen from '../screens/ItineraryScreen';
import CommentsScreen from '../screens/CommentsScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

function CitiesStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackVisible: true
            }}>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerShown: false
                }}
                name="Cities" component={CitiesScreen} />
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerBlurEffect: 'systemUltraThinMaterialDark'
                }}
                name="Details" component={DetailScreen} />
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerBlurEffect: 'systemUltraThinMaterialDark'
                }}
                name="Itinerary" component={ItineraryScreen} />
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerBlurEffect: 'systemUltraThinMaterialDark'
                }}
                name="Comments" component={CommentsScreen} />
        </Stack.Navigator>
    );
}


function AccountStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="My Account" component={AccountScreen} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function Router() {
    const scheme = useColorScheme()
    return (
        <NavigationContainer
            theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Explore') {
                            iconName = focused ? 'earth' : 'earth-outline';
                        } else if (route.name === 'Account') {
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',

                })}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'My Tinerary',
                        headerShown: false,
                    }}
                />
                <Tab.Screen name="Explore" component={CitiesStackScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Tab.Screen name="Account" component={AccountStackScreen}
                 options={{
                    headerShown: false,
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}