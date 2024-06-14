import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import Splash from './view/Splash';
import InicialLogin from './view/InicialLogin';
import Login from './view/Login';

const Stack = createNativeStackNavigator();
export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Splash' >
                <Stack.Screen name='Splash' component={Splash} options={{headerShown: false,}} />
                <Stack.Screen name='InicialLogin' component={InicialLogin} options={{headerShown: false,}} />
                <Stack.Screen name='Login' component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}