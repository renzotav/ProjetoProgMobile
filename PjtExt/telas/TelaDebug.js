import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaDebug() {
  const [produtos, setProdutos] = useState([]);

  // Função para carregar produtos do AsyncStorage
  const carregarProdutos = async () => {
    try {
      const produtosSalvos = await AsyncStorage.getItem('produtos');
      if (produtosSalvos) {
        setProdutos(JSON.parse(produtosSalvos));
      } else {
        setProdutos([]);
      }
    } catch (error) {
      console.log('Erro ao carregar produtos:', error);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  // Exibir os produtos carregados no AsyncStorage
  const exibirProdutos = () => {
    if (produtos.length === 0) {
      return <Text style={styles.texto}>Nenhum produto encontrado.</Text>;
    }

    return produtos.map((produto, index) => (
      <Text key={index} style={styles.texto}>
        {`Número: ${produto.numero} | Nome: ${produto.nome} | Quantidade: ${produto.quantidade}`}
      </Text>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Debug: Produtos no AsyncStorage</Text>
      {exibirProdutos()}
      <Button title="Atualizar Produtos" onPress={carregarProdutos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'yellow',
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    color: 'yellow',
  },
});
