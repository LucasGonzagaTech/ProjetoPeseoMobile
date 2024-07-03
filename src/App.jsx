// App.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaView } from 'react-native';
import Splash from './view/Splash';
import InicialLogin from './view/InicialLogin';
import Login from './view/Login';
import CriarConta from './view/CriarConta';
import TabNavigator from './Stack/TabNavigator';
import Perfil from './view/Perfil';

import DefinirSenha from './view/DefinirSenha';
import AlterarNome from './view/AlterarNome';

const Stack = createNativeStackNavigator();
const  Tab = createBottomTabNavigator ();

export default props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Splash' >
                    <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false, }} />
                    <Stack.Screen name='InicialLogin' component={InicialLogin} options={{ headerShown: false, }} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Cadastro' component={CriarConta} />
                    <Stack.Screen name='Definir Senha' component={DefinirSenha} />
                    <Stack.Screen name='Perfil' component={Perfil} />
                    <Stack.Screen name='Nome' component={AlterarNome}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}
