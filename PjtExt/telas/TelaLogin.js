import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function TelaLogin({ navigation, setIsLoggedIn }) {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const matriculaCorreta = '123456';
  const senhaCorreta = '123';

  const handleLogin = () => {
    if (matricula === matriculaCorreta && senha === senhaCorreta) {
      Alert.alert('Login bem-sucedido', 'Bem-vindo!');
      setIsLoggedIn(true); 
      navigation.navigate('CadastroProdutos');
    } else {
      Alert.alert('Erro de Login', 'Código ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.webp')} style={styles.logo} />

      <Text style={styles.titulo}>Preencha os campos abaixo:</Text> 

      <TextInput
        style={styles.input}
        placeholder="Código"
        placeholderTextColor={'yellow'}
        value={matricula}
        onChangeText={setMatricula}
        keyboardType="numeric"
        
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={'yellow'}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        keyboardType='numeric'
      />
      
      

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
      
      <Text style={styles.link} onPress={() => navigation.navigate('Esqueci minha senha')}>
        Esqueci minha senha
      </Text>
      
      <Text style={styles.link} onPress={() => navigation.navigate('Cadastre-se')}>
        Cadastre-se
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logo: {
    width: 250,
    height: 250,
    marginTop: 20,
  },
  titulo: {
    fontSize: 18,
    marginBottom: 20,
    color: 'yellow',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 5,
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: 5,
    color: 'yellow'
    
  },
  link: {
    marginTop: 15,
    color: 'yellow', 
    textDecorationLine: 'underline',
  },

  botao: {
    backgroundColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },

  textoBotao: {
    color: 'black',
    fontWeight: 'bold',
  },
  
});
