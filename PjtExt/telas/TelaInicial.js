import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.webp')} style={styles.logo} /> 

      <Text style={styles.titulo}>Bem vindo ao nosso APP, faça o login abaixo.</Text> 
      
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Login</Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  titulo: {
    fontSize: 18,
    marginVertical: 50,
    textAlign: 'center',
    color: '#333',
    paddingTop: 50,
  },
  loginButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginVertical: 100,
    width: 150,
    
  },
  loginText: {
    color: 'white',
    textAlign: 'center',

  },
});
