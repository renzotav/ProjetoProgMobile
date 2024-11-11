import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const ProdutosContext = createContext();

export const ProdutosProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const produtosSalvos = await AsyncStorage.getItem('produtos');
        if (produtosSalvos) {
          setProdutos(JSON.parse(produtosSalvos));
        }
      } catch (error) {
        console.log('Erro ao carregar produtos:', error);
      }
    };
    carregarProdutos();
  }, []);

  const adicionarProduto = async (numero, nome, quantidade) => {
    const produtoExistente = produtos.find(produto => produto.numero === numero);

    if (produtoExistente) {
      Alert.alert('Erro', 'Já existe um produto com esse número.');
      return;
    }

    const novoProduto = { id: Date.now().toString(), numero, nome, quantidade };
    const novosProdutos = [...produtos, novoProduto];
    setProdutos(novosProdutos);

    try {
      await AsyncStorage.setItem('produtos', JSON.stringify(novosProdutos));
    } catch (error) {
      console.log('Erro ao salvar produto:', error);
    }
  };

  const removerQuantidade = (id, quantidadeRemover) => {
    const novosProdutos = produtos
      .map(produto => {
        if (produto.id === id) {
          const novaQuantidade = produto.quantidade - quantidadeRemover;
          return novaQuantidade <= 0 ? null : { ...produto, quantidade: novaQuantidade };
        }
        return produto;
      })
      .filter(Boolean); // Remove produtos com quantidade zero ou negativa
    setProdutos(novosProdutos);

    try {
      AsyncStorage.setItem('produtos', JSON.stringify(novosProdutos));
    } catch (error) {
      console.log('Erro ao salvar produtos após remoção:', error);
    }
  };

  const adicionarQuantidade = (id, quantidadeAdicionar) => {
    const novosProdutos = produtos.map(produto =>
      produto.id === id
        ? { ...produto, quantidade: produto.quantidade + quantidadeAdicionar }
        : produto
    );
    setProdutos(novosProdutos);

    try {
      AsyncStorage.setItem('produtos', JSON.stringify(novosProdutos));
    } catch (error) {
      console.log('Erro ao salvar produtos após adição:', error);
    }
  };

  return (
    <ProdutosContext.Provider value={{ produtos, adicionarProduto, removerQuantidade, adicionarQuantidade }}>
      {children}
    </ProdutosContext.Provider>
  );
};

export default ProdutosContext;


