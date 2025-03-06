import React, { useState } from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, Alert, TextInput} from 'react-native'
import Button from '../components/Button';
import formStyles from '../assets/js/styles'

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdValidation, setPwdValidation] = useState("")
  const [emailValidation, setEmailValidation] = useState("")

  const eValidation = (value) => {
    if(!email){
      setEmailValidation("Email is required");
    }
    setEmail(value)
  }
  const pValidation = (value) => {
    if(!password){
      setPwdValidation("Email is required");
    }
    setPassword(value)
  }

  const handleSubmit = () => {
    if(!email || !password){
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    Alert.alert('Success', `Name: ${email}, Enjoy !`)
    
    navigation.navigate('Home', {email});

    setEmail('');
    setPassword('')
  }

  return (
    <SafeAreaView style={formStyles.Wrapper}>
        <View style={formStyles.formContainer}>
          <View style={formStyles.formHeader}>
            <Image source={require('../assets/images/logo.png')} style={formStyles.logo}/>
            <Text style={formStyles.welcomeMsg}>Welcome Back!</Text>
            <Text style={formStyles.welcomeMsg}>Sign in to continue</Text>
          </View>

          {/* Input fields */}
          <View style={formStyles.container}>
            <View style={formStyles.inputControl}>
              <Text style={formStyles.label}>Name:</Text>
              <TextInput
                style={formStyles.input}
                value={email}
                onChangeText={eValidation}
                placeholder="Enter your active email"
              />
            </View>
            <View style={formStyles.inputControl}>
              <Text style={formStyles.label}>Password:</Text>
              <TextInput
                style={formStyles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Atleast 8 characters"
              />
            </View>
            
            <Button 
            title="Sign in"
            onPress={handleSubmit}
            />
          </View>
        </View>
    </SafeAreaView>
  )
}

