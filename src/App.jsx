import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import Splash from './view/Splash';
import CriarConta from './view/CriarConta';

const Stack = createStackNavigator();
export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Criar'>
                    <Stack.Screen name="Splash" component={Splash}
                    options={
                        {
                            headerShown: false
                        }
                    }
                    />
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
