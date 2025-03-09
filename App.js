import { StatusBar } from 'expo-status-bar';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" >
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Next" component={HomeScreen} />
          <Stack.Screen name="Sign in" component={LoginScreen} />
          <Stack.Screen name="Sign up" component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

