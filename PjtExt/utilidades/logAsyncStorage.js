import AsyncStorage from '@react-native-async-storage/async-storage';

export const logProdutosAsyncStorage = async () => {
  try {
    const produtosSalvos = await AsyncStorage.getItem('produtos');
    if (produtosSalvos) {
      console.log('Produtos no AsyncStorage:', JSON.parse(produtosSalvos));
    } else {
      console.log('Nenhum produto encontrado no AsyncStorage.');
    }
  } catch (error) {
    console.log('Erro ao carregar produtos:', error);
  }
};
