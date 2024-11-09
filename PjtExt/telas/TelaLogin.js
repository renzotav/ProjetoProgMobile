// TelaLogin.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

export default function TelaLogin({ navigation, setIsLoggedIn }) {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const matriculaCorreta = '123456';
  const senhaCorreta = 'senha123';

  const handleLogin = () => {
    if (matricula === matriculaCorreta && senha === senhaCorreta) {
      Alert.alert('Login bem-sucedido', 'Bem-vindo!');
      setIsLoggedIn(true); 
      navigation.navigate('CadastroProdutos');
    } else {
      Alert.alert('Erro de Login', 'Matrícula ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Preencha os campos abaixo:</Text> 

      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      
      <Button color={'black'} title="Entrar" onPress={handleLogin} />
      
      
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
    backgroundColor: 'grey',
  },
  titulo: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  link: {
    marginTop: 15,
    color: 'white', 
    textDecorationLine: 'underline',
  },
});
