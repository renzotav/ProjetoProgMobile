/*
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function TelaCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [matricula, setMatricula] = useState('');

  const handleCadastro = () => {
    if (nome && email && senha && telefone && endereco && matricula) {
      cadastrarUsuario(nome, email, senha, telefone, endereco, matricula);
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
    } else {
      Alert.alert('Erro', 'Preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome Completo" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" value={telefone} onChangeText={setTelefone} />
      <TextInput style={styles.input} placeholder="Endereço" value={endereco} onChangeText={setEndereco} />
      <TextInput style={styles.input} placeholder="Matrícula" value={matricula} onChangeText={setMatricula} />
      <Button color={'black'} title="Cadastrar" onPress={handleCadastro} />
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
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});
*/

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function TelaCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [matricula, setMatricula] = useState('');

  // Função para cadastrar o usuário
  const cadastrarUsuario = (nome, email, senha, telefone, endereco, matricula) => {
    // Aqui você colocaria a lógica para salvar os dados no banco de dados ou fazer uma requisição
    // Por enquanto, vamos apenas logar os dados para simular o cadastro
    console.log('Usuário cadastrado com sucesso!');
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Telefone:', telefone);
    console.log('Endereço:', endereco);
    console.log('Matrícula:', matricula);
  };

  const handleCadastro = () => {
    if (nome && email && senha && telefone && endereco && matricula) {
      // Chama a função de cadastro passando os dados preenchidos
      cadastrarUsuario(nome, email, senha, telefone, endereco, matricula);
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
    } else {
      Alert.alert('Erro', 'Preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome Completo" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" value={telefone} onChangeText={setTelefone} />
      <TextInput style={styles.input} placeholder="Endereço" value={endereco} onChangeText={setEndereco} />
      <TextInput style={styles.input} placeholder="Matrícula" value={matricula} keyboardType="numeric" onChangeText={setMatricula} />
      <Button color={'black'} title="Cadastrar" onPress={handleCadastro} />
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
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});
