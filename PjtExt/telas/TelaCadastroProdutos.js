import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function TelaCadastroProdutos({ navigation }) {
  const [nomeProduto, setNomeProduto] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState('');
  const [quantidadeRemover, setQuantidadeRemover] = useState('');
  const [produtos, setProdutos] = useState([]);
  const limiteProdutos = 100;

  const adicionarProduto = () => {
    if (nomeProduto && quantidadeProduto) {
      const quantidade = parseInt(quantidadeProduto);

      if (isNaN(quantidade) || quantidade <= 0) {
        Alert.alert('Erro', 'Por favor, insira uma quantidade válida.');
        return;
      }

      const produtoExistente = produtos.find((produto) => produto.nome.toLowerCase() === nomeProduto.toLowerCase());

      if (produtoExistente) {
        const produtosAtualizados = produtos.map((produto) =>
          produto.nome.toLowerCase() === nomeProduto.toLowerCase()
            ? { ...produto, quantidade: produto.quantidade + quantidade }
            : produto
        );
        setProdutos(produtosAtualizados);
        Alert.alert('Produto atualizado', `Adicionadas ${quantidade} unidades ao produto ${nomeProduto}`);
      } else {
        if (produtos.length >= limiteProdutos) {
          Alert.alert('Limite atingido', 'Você já atingiu o limite de produtos.');
          return;
        }

        const novoProduto = { id: Date.now().toString(), nome: nomeProduto, quantidade };
        setProdutos([...produtos, novoProduto]);
        Alert.alert('Produto adicionado', `Produto ${nomeProduto} adicionado com sucesso!`);
      }

      setNomeProduto('');
      setQuantidadeProduto('');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  const removerQuantidade = (id) => {
    const quantidadeRemovida = parseInt(quantidadeRemover);

    if (isNaN(quantidadeRemovida) || quantidadeRemovida <= 0) {
      Alert.alert('Erro', 'Por favor, insira uma quantidade válida para remover.');
      return;
    }

    setProdutos((produtosAnteriores) =>
      produtosAnteriores.map((produto) => {
        if (produto.id === id) {
          const novaQuantidade = produto.quantidade - quantidadeRemovida;
          if (novaQuantidade <= 0) {
            Alert.alert('Quantidade removida', `${produto.nome} foi removido do estoque.`);
            return null;
          }
          return { ...produto, quantidade: novaQuantidade };
        }
        return produto;
      }).filter(Boolean)
    );
    setQuantidadeRemover('');
  };

  const sair = () => {
    navigation.navigate('Login'); // Retorna para a tela de login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Produtos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantidadeProduto}
        onChangeText={setQuantidadeProduto}
      />
      <Button color="black" title="Adicionar Produto" onPress={adicionarProduto} />

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.produto}>
            <Text style={styles.nomeProduto}>{item.nome}</Text>
            <Text style={styles.quantidadeProduto}>Quantidade: {item.quantidade}</Text>
            <TextInput
              style={styles.inputRemover}
              placeholder="Qtd a Remover"
              keyboardType="numeric"
              value={quantidadeRemover}
              onChangeText={setQuantidadeRemover}
            />
            <Button color="black" title="Remover Quantidade" onPress={() => removerQuantidade(item.id)} />
          </View>
        )}
      />

      <TouchableOpacity style={styles.botaoSair} onPress={sair}>
        <Text style={styles.textoBotaoSair}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'grey',
    
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: 'black',
    
  },
  produto: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantidadeProduto: {
    fontSize: 14,
    marginBottom: 5,
  },
  inputRemover: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
  },
  botaoSair: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  textoBotaoSair: {
    color: 'white',
    fontSize: 16,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
});


