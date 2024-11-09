import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function TelaEsqueciSenha({ navigation }) {
  const [matricula, setMatricula] = useState('');

  const handleEsqueciSenha = () => {
    
    if (matricula) {
      Alert.alert(
        "Recuperação de Senha",
        `Um e-mail de recuperação foi enviado para o e-mail cadastrado com a matrícula ${matricula}.`,
        [{ text: "OK", onPress: () => navigation.goBack() }]
      );
    } else {
      Alert.alert("Erro", "Por favor, insira sua matrícula.");
    }
  };

  return (
   
    <View style={styles.container}>
      <Text style={styles.titulo}>Esqueci Minha Senha</Text> 
      <Text style={styles.instrucao}>
        Digite sua matrícula abaixo e enviaremos um e-mail para o endereço cadastrado.
      </Text> 
      
      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
        keyboardType="numeric"
      />
      
      <Button color={'black'} title="Enviar E-mail de Recuperação" onPress={handleEsqueciSenha} />
      
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
    backgroundColor: 'grey',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  instrucao: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'black', 
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  voltar: {
    marginTop: 15,
    color: 'white', 
  },
  button: {
    color: 'black',
  }
});
