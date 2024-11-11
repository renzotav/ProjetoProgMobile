
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import ProdutosContext from './ContProd';

export default function TelaProdutos() {
  const { produtos, removerQuantidade, adicionarQuantidade } = useContext(ProdutosContext);
  const [isModalVisibleRemover, setModalVisibleRemover] = useState(false);
  const [isModalVisibleAdicionar, setModalVisibleAdicionar] = useState(false);
  const [numeroProduto, setNumeroProduto] = useState('');
  const [quantidadeRemover, setQuantidadeRemover] = useState('');
  const [quantidadeAdicionar, setQuantidadeAdicionar] = useState('');

  const toggleModalRemover = () => {
    setModalVisibleRemover(!isModalVisibleRemover);
  };

  const toggleModalAdicionar = () => {
    setModalVisibleAdicionar(!isModalVisibleAdicionar);
  };

  const handleRemoverQuantidade = () => {
    const quantidade = parseInt(quantidadeRemover);
    const produto = produtos.find(produto => produto.numero === numeroProduto);

    if (!produto) {
      Alert.alert('Erro', 'Produto não encontrado.');
      return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
      Alert.alert('Erro', 'Por favor, insira uma quantidade válida.');
      return;
    }

    removerQuantidade(produto.id, quantidade);
    Alert.alert('Quantidade removida', `Removidas ${quantidade} unidades do produto ${produto.nome}.`);
    setNumeroProduto('');
    setQuantidadeRemover('');
    toggleModalRemover();
  };

  const handleAdicionarQuantidade = () => {
    const quantidade = parseInt(quantidadeAdicionar);
    const produto = produtos.find(produto => produto.numero === numeroProduto);

    if (!produto) {
      Alert.alert('Erro', 'Produto não encontrado.');
      return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
      Alert.alert('Erro', 'Por favor, insira uma quantidade válida.');
      return;
    }

    adicionarQuantidade(produto.id, quantidade);
    Alert.alert('Quantidade adicionada', `Adicionadas ${quantidade} unidades ao produto ${produto.nome}.`);
    setNumeroProduto('');
    setQuantidadeAdicionar('');
    toggleModalAdicionar();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Produtos</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.produto}>
            <Text style={styles.nomeProduto}>
              {item.numero} - {item.nome}
            </Text>
            <Text style={styles.quantidadeProduto}>Quantidade: {item.quantidade}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={[styles.botao, { backgroundColor: 'red' }]}
        onPress={toggleModalRemover}
      >
        <Text style={styles.textoBotao}>Remover Quantidade</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { backgroundColor: 'green' }]}
        onPress={toggleModalAdicionar}
      >
        <Text style={styles.textoBotao}>Adicionar Quantidade</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisibleRemover}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Remover Quantidade</Text>
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
            placeholder="Quantidade"
            placeholderTextColor={'yellow'}
            keyboardType="numeric"
            value={quantidadeRemover}
            onChangeText={setQuantidadeRemover}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.botao]} onPress={handleRemoverQuantidade}>
              <Text style={styles.textoBotao}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao]} onPress={toggleModalRemover}>
              <Text style={styles.textoBotao}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal isVisible={isModalVisibleAdicionar}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Adicionar Quantidade</Text>
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
            placeholder="Quantidade"
            placeholderTextColor={'yellow'}
            keyboardType="numeric"
            value={quantidadeAdicionar}
            onChangeText={setQuantidadeAdicionar}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.botao]} onPress={handleAdicionarQuantidade}>
              <Text style={styles.textoBotao}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao]} onPress={toggleModalAdicionar}>
              <Text style={styles.textoBotao}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  produto: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10,
    backgroundColor: 'yellow',
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
  modalContent: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'yellow',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: 'yellow',
    width: '100%',
    color: 'yellow',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  botao: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: 'yellow'
  },
  textoBotao: {
    color: 'black',
    fontWeight: 'bold',
  },
});


