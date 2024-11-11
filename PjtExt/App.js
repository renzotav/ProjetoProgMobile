
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import TelaProdutos from './telas/TelaProdutos';
import { ProdutosProvider } from './telas/ContProd';
import TelaInicial from './telas/TelaInicial';
import TelaLogin from './telas/TelaLogin';
import TelaCadastro from './telas/TelaCadastro';
import TelaEsqueciSenha from './telas/TelaEsqueciSenha';
import TelaCadastroProdutos from './telas/TelaCadastroProdutos';
import TelaMenuPrincipal from './telas/TelaMenuPrincipal';
import TelaDebug from './telas/TelaDebug';

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNavigationReady, setIsNavigationReady] = useState(false);

  useEffect(() => {
    setIsNavigationReady(true);
  }, []);

  return (
    <ProdutosProvider>
      <NavigationContainer onReady={() => setIsNavigationReady(true)}>
        <Drawer.Navigator 
          initialRouteName="TelaInicial"
          drawerContent={(props) => (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              {isLoggedIn && <DrawerItem label="Sair" labelStyle={{ color: 'yellow' }} onPress={() => setIsLoggedIn(false)} />}
            </DrawerContentScrollView>
          )}
          screenOptions={{
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTintColor: 'black',
            headerShown: true,
            drawerStyle: {
              backgroundColor: 'black',
              width: 250,
            },
            drawerActiveBackgroundColor: 'yellow',
            drawerInactiveBackgroundColor: 'black',
            drawerActiveTintColor: 'black',
            drawerInactiveTintColor: 'yellow',
            drawerType: 'slide',
            drawerLabelStyle: {
              fontSize: 16,
            },
          }}
        >
          {!isLoggedIn ? (
            <>
              <Drawer.Screen name="Inicio" component={TelaInicial} />
              <Drawer.Screen name="Login">
                {(props) => <TelaLogin {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Drawer.Screen>
              <Drawer.Screen name="Cadastre-se" component={TelaCadastro} />
              <Drawer.Screen name="Esqueci minha senha" component={TelaEsqueciSenha} />
            </>
          ) : (
            <>
              <Drawer.Screen name="MenuPrincipal" component={TelaMenuPrincipal} />
              <Drawer.Screen name="Produtos" component={TelaProdutos} />
              <Drawer.Screen name="CadastroProdutos" component={TelaCadastroProdutos} />
              <Drawer.Screen name="Tela de debug" component={TelaDebug} />
            </>
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </ProdutosProvider>
  );
}
  
