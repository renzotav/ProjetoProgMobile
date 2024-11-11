import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function TelaMenuPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo!</Text>
      <Image source={require('../assets/logo.webp')} style={styles.imagem} />
      <View style={styles.botaoContainer}>
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('CadastroProdutos')}
      >
        <Text style={styles.textoBotao}>Cadastrar Produto</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.botaoContainer}>
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Produtos')}
      >
        <Text style={styles.textoBotao}>Ver Produtos</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'black',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'yellow'
  },
  imagem: {
    width: 250,
    height: 250,
    marginBottom: 30, 
  },
  botoesContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  botao: {
    backgroundColor: 'yellow',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 15, 
  },
  textoBotao: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
