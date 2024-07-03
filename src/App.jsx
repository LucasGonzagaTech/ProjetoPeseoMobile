// App.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackNavigaion from './Stack/StackNavigation';

export default props => {
    return (
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <StackNavigaion/>
            </NavigationContainer>
        </SafeAreaView>
    )
}
