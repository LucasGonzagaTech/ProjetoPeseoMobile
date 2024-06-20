import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import Splash from './view/Splash';

import InicialLogin from './view/InicialLogin';
import Login from './view/Login';

import CriarConta from './view/CriarConta';

const Stack = createNativeStackNavigator();
export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Login' >
                <Stack.Screen name='Splash' component={Splash} options={{headerShown: false,}} />
                <Stack.Screen name='InicialLogin' component={InicialLogin} options={{headerShown: false,}} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name="Criar" component={CriarConta}
                    options={
                        {
                            headerTitleAlign:'center',
                            headerStyle: {
                                backgroundColor: '#f2f2f2',
                                paddingHorizontal: 16,  
                                paddingVertical: 16, 
                            },
                        }
                    }
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}
    
        