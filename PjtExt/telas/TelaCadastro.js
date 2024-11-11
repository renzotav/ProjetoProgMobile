import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [codigo, setCodigo] = useState('');

  const cadastrarUsuario = async (nome, email, senha, telefone, endereco, codigo) => {
    try {
      const usuario = { nome, email, senha, telefone, endereco, codigo };
      await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
    } catch (error) {
      console.log('Erro ao salvar usuário:', error);
    }
  };

  const handleCadastro = () => {
    if (nome && email && senha && telefone && endereco && codigo) {
      cadastrarUsuario(nome, email, senha, telefone, endereco, codigo);
    } else {
      Alert.alert('Erro', 'Preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome Completo" placeholderTextColor={'yellow'} value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor={'yellow'} value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor={'yellow'} secureTextEntry value={senha} onChangeText={setSenha} />
      <TextInput style={styles.input} placeholder="Telefone" placeholderTextColor={'yellow'} value={telefone} onChangeText={setTelefone} />
      <TextInput style={styles.input} placeholder="Endereço" placeholderTextColor={'yellow'} value={endereco} onChangeText={setEndereco} />
      <TextInput style={styles.input} placeholder="Código" placeholderTextColor={'yellow'} value={codigo} onChangeText={setCodigo} />
      
      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: 'yellow',
    color: 'yellow',
  },
  botao: {
    backgroundColor: 'yellow',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
