import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import Splash from './view/Splash';
import InicialLogin from './view/InicialLogin';
import Login from './view/Login';
import CriarConta from './view/CriarConta';
import Recuperar from './view/Recuperar';
import MensagemRecu from './view/MensagemRecu';
import DefinirSenha from './view/DefinirSenha';
import Perfil from './view/Perfil';

const Stack = createNativeStackNavigator();
export default props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Perfil' >
                    <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false, }} />
                    <Stack.Screen name='InicialLogin' component={InicialLogin} options={{ headerShown: false, }} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Cadastro' component={CriarConta} />
                    <Stack.Screen name='Recuperar Senha' component={Recuperar} />
                    <Stack.Screen name='Mensagem de Recuperação' component={MensagemRecu} />
                    <Stack.Screen name='Definir Senha' component={DefinirSenha} />
                    <Stack.Screen name='Perfil' component={Perfil} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}