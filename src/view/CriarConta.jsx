import React from "react";
import { StyleSheet, SafeAreaView, Text, Image, View } from "react-native";
import { TextInput } from "react-native-paper";

import logo from '../../assets/imgs/logoRight.png'

export default props => {
    const [text, onChangeText] = React.useState('Useless Text');

    return (
        <SafeAreaView style={style.container}>
            <View style={style.content}>

                <Image source={logo} />

                <View style={style.contentInput}>
                    <Text>E-mail *</Text>
                    <TextInput
                        placeholder="Digite seu email"
                        style={style.input}
                        onFocus={onChangeText}
                        value={text}
                    />
                </View>
                    

                </View>


        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1
        },

        content: {
            padding: 16,
            justifyContent: "center",
            alignItems: "center"
        },

        contentInput:{
            width: '100%',
            marginTop: 24,
            marginBottom: 24,
        },

        input: {
            borderWidth: 1,
            borderColor: '#CCC4D8',
            backgroundColor: 'none',
        }
    }
)