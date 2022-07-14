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

const Stack = createNativeStackNavigator();

function CitiesStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            options={{
                headerTransparent: true,
                headerShown: false
            }}
            name="Cities" component={CitiesScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
    );
}


function AccountStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Log In" component={AccountScreen} />
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
                        } else if (route.name === 'My Account') {
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
                        headerTransparent: true,
                        headerShown: false
                    }}
                />
                <Tab.Screen name="Explore" component={CitiesStackScreen}
                    options={{
                        headerTransparent: true,
                        headerShown: false
                    }} />
                <Tab.Screen name="My Account" component={AccountStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}