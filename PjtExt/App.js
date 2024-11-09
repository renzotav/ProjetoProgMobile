import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaInicial from './telas/TelaInicial';
import TelaLogin from './telas/TelaLogin';
import TelaCadastro from './telas/TelaCadastro';
import TelaEsqueciSenha from './telas/TelaEsqueciSenha';
import TelaCadastroProdutos from './telas/TelaCadastroProdutos';

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TelaInicial"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(31, 31, 31)', //Cor de fundo do cabeçalho do drawer
        },
        headerTintColor: 'white', //Cor do texto do drawer
        headerShown: true,
      drawerStyle: {
        backgroundColor: 'rgb(31, 31, 31)', 
        width: 250, }, 
        drawerActiveBackgroundColor: 'black', // Cor de fundo para o item ativo
          drawerInactiveBackgroundColor: 'rgb(51, 51, 51)', // Cor de fundo para os itens inativos
          drawerActiveTintColor: 'white', // Cor do texto para o item ativo
          drawerInactiveTintColor: 'rgb(187, 187, 187)', // Cor do texto para os itens inativos
          drawerType: 'slide', // Pode mudar para 'back', 'slide' ou 'permanent'
          drawerLabelStyle: {
            fontSize: 16, // Tamanho da fonte dos itens do drawer
          },
          }}
          >
        <Drawer.Screen name="Inicio" component={TelaInicial} />
        <Drawer.Screen 
          name="Login" 
          component={(props) => <TelaLogin {...props} setIsLoggedIn={setIsLoggedIn} />} 
        />
        <Drawer.Screen name="Cadastre-se" component={TelaCadastro} />
        <Drawer.Screen name="Esqueci minha senha" component={TelaEsqueciSenha} />
        {isLoggedIn && (
          <Drawer.Screen 
            name="CadastroProdutos" 
            component={TelaCadastroProdutos} 
            options={{ drawerItemStyle: { display: 'none' } }} 
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
