import React from 'react'
import '../global.css'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native';

export default function WelcomeScreen({ navigation }) {
    const handlePress = () => {
        alert("Welcome to Dementa's Empire");
    };

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/images/logo.png')} 
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Pressable style={styles.btn} onPress={()=>{navigation.navigate('Sign in')}} className="bg-gray-500">
          <Text className="text-white">Get Started</Text>
        </Pressable>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#f7941d',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20,
    },
    logoContainer: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 200,
    },
    btn: {
      width: '90%', // Full width of the container
      height: 50, // Set a height for the button
      borderRadius: 25, // Rounded corners
      // backgroundColor: '#333333', // Background color
      justifyContent: 'center', // Center content vertically
      alignItems: 'center', // Center content horizontally
      marginVertical: 20,
      marginHorizontal: 20,
    },
    btnText: {
      color: 'white', // Text color
      fontWeight: 'bold', // Bold text
      textAlign: 'center', // Center text
    },
  });
