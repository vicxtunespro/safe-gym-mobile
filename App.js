import { StatusBar } from 'expo-status-bar';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Next" component={HomeScreen} />
        <Stack.Screen name="Sign in" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

