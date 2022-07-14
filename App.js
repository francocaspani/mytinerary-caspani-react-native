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
import Router from './src/components/Router';

export const urlBackend = 'https://mytinerary-caspani-back.herokuapp.com/api'

const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme()
  return (
    <Provider store={store}>
        <Router />
    </Provider>
  );
}

