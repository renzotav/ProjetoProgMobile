import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function TelaEsqueciSenha({ navigation }) {
  const [codigo, setCodigo] = useState('');

  const handleEsqueciSenha = () => {
    
    if (codigo) {
      Alert.alert(
        "Recuperação de Senha",
        `Um e-mail de recuperação foi enviado para o e-mail cadastrado com o código ${codigo}.`,
        [{ text: "OK", onPress: () => navigation.goBack() }]
      );
    } else {
      Alert.alert("Erro", "Por favor, insira seu código.");
    }
  };

  return (
   
    <View style={styles.container}>
      <Text style={styles.titulo}>Esqueci Minha Senha</Text> 
      <Text style={styles.instrucao}>
        Digite seu código abaixo e enviaremos um e-mail para o endereço cadastrado.
      </Text> 
      
      <TextInput
        style={styles.input}
        placeholder="Código"
        placeholderTextColor={'yellow'}
        value={codigo}
        onChangeText={setCodigo}
        keyboardType="numeric"
      />
      
      <TouchableOpacity style={styles.botao} onPress={handleEsqueciSenha}>
        <Text style={styles.textoBotao}>Enviar E-mail de Recuperação</Text>
      </TouchableOpacity>
      
      <Text style={styles.voltar} onPress={() => navigation.goBack()}>
        Voltar para o Login
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
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'yellow'
  },
  instrucao: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'yellow', 
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: 5,
    color: 'yellow',
  },
  voltar: {
    marginTop: 15,
    color: 'yellow', 
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
