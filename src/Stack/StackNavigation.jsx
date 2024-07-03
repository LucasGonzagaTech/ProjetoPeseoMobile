// Importando dependências
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigaion from "./TabNavigation";

//Paginas
import Login from '../view/Login';
import InicialLogin from '../view/InicialLogin';
import Splash from '../view/Splash';
import DefinirSenha from '../view/DefinirSenha';
import CreateAccountScrenn from "../view/CreateAccountScrenn";

export default props => {
    const Stack = createNativeStackNavigator()
    return (
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash}  
                options={
                    { 
                        headerShown: false, 
                        headerTitleAlign:"center",
                    }} />

                <Stack.Screen name="InicialLogin" component={InicialLogin} 
                options={
                    { 
                        headerShown: false, 
                        headerTitleAlign:"center",
                    }} />
                
                <Stack.Screen name="Login" component={Login} 
                options={
                    { 
                        headerTitleAlign:"center",
                    }} />

                <Stack.Screen name="Cadastro" component={CreateAccountScrenn} options={
                    { 
                        headerTitleAlign:"center",
                    }} />

                <Stack.Screen name="DefinirSenha" component={DefinirSenha} options={
                    { 
                        headerTitleAlign:"center",
                    }} />

                <Stack.Screen name="Tab" component={TabNavigaion}
                    options={
                        {
                            headerShown: false,
                        }}/>

            </Stack.Navigator>
    )
}