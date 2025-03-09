import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  // Handle form submission
  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Password:', password);

    navigation.navigate('Next')
  };

  return (
    <View style={styles.container}>
      {/* Logo Placeholder */}
      <Text style={styles.logo}>LOGO</Text>

      {/* Welcome Message */}
      <Text style={styles.title}>Welcome back!</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      {/* Email Input */}
      <TextInput
        label="Email/Phone number"
        mode="outlined"
        placeholder="Enter your active email."
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />

      {/* Password Input */}
      <TextInput
        label="Password"
        mode="outlined"
        placeholder="At least 8 characters"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={secureTextEntry}
        right={
          <TextInput.Icon
            icon={secureTextEntry ? "eye-off" : "eye"}
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          />
        }
        style={styles.input}
      />

      {/* Forgot Password */}
      <Text style={styles.forgotPassword}>Forgot password</Text>

      {/* Sign In Button */}
      <Button mode="contained" onPress={handleSubmit} style={styles.signInButton}>
        Sign in
      </Button>

      {/* Create Account Link */}
      <Text style={styles.createAccount}>
        New here? <Text style={styles.link} onPress={()=>{navigation.navigate('Sign up')}}>Create account</Text>
      </Text>

      {/* Social Login Section */}
      <Text style={styles.socialLoginText}>Sign in with</Text>
      <View style={styles.socialIcons}>
        <IconButton icon="google" size={30} onPress={() => console.log('Google Login')} />
        <IconButton icon="facebook" size={30} onPress={() => console.log('Facebook Login')} />
        <IconButton icon="instagram" size={30} onPress={() => console.log('Instagram Login')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#777',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#555',
    marginBottom: 20,
  },
  signInButton: {
    width: '100%',
    backgroundColor: '#444',
    paddingVertical: 5,
    marginBottom: 20,
  },
  createAccount: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  link: {
    color: '#000',
    fontWeight: 'bold',
  },
  socialLoginText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 10,
  },
});

