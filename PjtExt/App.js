import React, { useState, useEffect } from 'react';
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
  const [isNavigationReady, setIsNavigationReady] = useState(false);

  useEffect(() => {
    setIsNavigationReady(true);
  }, []);

  return (
    <NavigationContainer onReady={() => setIsNavigationReady(true)}>
      <Drawer.Navigator 
        initialRouteName="TelaInicial"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(31, 31, 31)',
          },
          headerTintColor: 'white',
          headerShown: true,
          drawerStyle: {
            backgroundColor: 'rgb(31, 31, 31)',
            width: 250,
          },
          drawerActiveBackgroundColor: 'black',
          drawerInactiveBackgroundColor: 'rgb(51, 51, 51)',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'rgb(187, 187, 187)',
          drawerType: 'slide',
          drawerLabelStyle: {
            fontSize: 16,
          },
        }}
      >
        <Drawer.Screen name="Inicio" component={TelaInicial} />
        <Drawer.Screen name="Login">
          {(props) => <TelaLogin {...props} setIsLoggedIn={setIsLoggedIn} />}
        </Drawer.Screen>
        <Drawer.Screen name="Cadastre-se" component={TelaCadastro} />
        <Drawer.Screen name="Esqueci minha senha" component={TelaEsqueciSenha} />

        {/* Somente exibir CadastroProdutos se o usuário estiver logado e a navegação estiver pronta */}
        {isLoggedIn && isNavigationReady && (
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
