import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './store';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import HomeScreen from './src/screens/HomeScreen';
import CitiesScreen from './src/screens/CitiesScreen';
import AccountScreen from './src/screens/AccountScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useColorScheme } from 'react-native';

export const urlBackend = 'https://mytinerary-caspani-back.herokuapp.com/api'

const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme()
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer 
        theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Tab.Navigator 
          screenOptions={({route})=>({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Cities') {
                iconName = focused ? 'earth' : 'earth-outline';
              } else if (route.name === 'My Account') {
                iconName = focused ? 'person' : 'person-outline';
              }
              
              // You can return any component that you like here!
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
                headerTransparent : true,
                headerStyle: {
                  backgroundColor: `rgba(0,0,0,0.4)`,
                }
              }}
            />
            <Tab.Screen name="Cities" component={CitiesScreen} 
            options={{
              headerTransparent : true
            }}/>
            <Tab.Screen name="My Account" component={AccountScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
}

