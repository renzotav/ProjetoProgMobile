import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProdutosContext from './ContProd';
import { logProdutosAsyncStorage } from '../utilidades/logAsyncStorage'

export default function TelaCadastroProdutos({ navigation }) {
  const { produtos, adicionarProduto } = useContext(ProdutosContext); // Acesso ao contexto de produtos
  const [numeroProduto, setNumeroProduto] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState('');
  const limiteProdutos = 100;

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const produtosSalvos = await AsyncStorage.getItem('produtos');
        if (produtosSalvos) {
          setProdutos(JSON.parse(produtosSalvos)); // Carrega os produtos do AsyncStorage
        }
      } catch (error) {
        console.log('Erro ao carregar produtos:', error);
      }
    };
    carregarProdutos();
    logProdutosAsyncStorage();
  }, []);

  const handleAdicionarProduto = async () => {
    if (numeroProduto && nomeProduto && quantidadeProduto) {
      const quantidade = parseInt(quantidadeProduto);

      if (isNaN(quantidade) || quantidade <= 0) {
        Alert.alert('Erro', 'Por favor, insira uma quantidade válida.');
        return;
      }

      if (produtos.length >= limiteProdutos) {
        Alert.alert('Limite atingido', 'Você já atingiu o limite de produtos.');
        return;
      }

      const produtoExistente = produtos.find(produto => produto.numero === numeroProduto);
      if (produtoExistente) {
        Alert.alert('Erro', 'Já existe um produto com esse número.');
        return;
      }

      // Adiciona o novo produto ao contexto
      adicionarProduto(numeroProduto, nomeProduto, quantidade);

      // Atualiza a lista de produtos localmente (caso o estado global ainda não tenha sido atualizado)
      const produtosAtualizados = [...produtos, { numero: numeroProduto, nome: nomeProduto, quantidade }];
      
      // Salva a lista de produtos no AsyncStorage
      try {
        await AsyncStorage.setItem('produtos', JSON.stringify(produtosAtualizados));
        Alert.alert('Produto adicionado', `Produto ${nomeProduto} adicionado com sucesso!`);
      } catch (error) {
        console.log('Erro ao salvar produto:', error);
      }

      // Limpa os campos
      setNumeroProduto('');
      setNomeProduto('');
      setQuantidadeProduto('');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  const sair = () => {
    navigation.navigate('Login'); // Retorna para a tela de login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Produtos</Text>
      <TextInput
        style={styles.input}
        placeholder="Número do Produto"
        placeholderTextColor={'yellow'}
        value={numeroProduto}
        onChangeText={setNumeroProduto}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        placeholderTextColor={'yellow'}
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        placeholderTextColor={'yellow'}
        keyboardType="numeric"
        value={quantidadeProduto}
        onChangeText={setQuantidadeProduto}
      />
      
      <TouchableOpacity style={styles.botao} onPress={handleAdicionarProduto}>
        <Text style={styles.textoBotao}>Adicionar Produto</Text>
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
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 10,
    color: 'yellow',
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
