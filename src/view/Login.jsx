import React from "react";
import { SafeAreaView, Text, ImageBackground, StyleSheet, Image, Pressable, View, TextInput } from "react-native";
import comonStyles from "../comonStyles";

import logo from '../../assets/imgs/logoRight.png'
import Icon from "react-native-vector-icons/Ionicons";

export default props => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return(
        <SafeAreaView style={style.container}>
            
            <View style={style.image}>
                <Image source={logo} />
            </View>

            <View style={style.content}>
                <View style={style.contentInput}>
                    <Text style={style.labelInput}>E-mail *</Text>
                    <TextInput
                        mode="outlined"
                        placeholder="Digite seu email"
                        style={style.input}
                        onFocus={setEmail}
                        value={email}
                    />
                </View>

                <View style={style.contentInput}>
                    <Text style={style.labelInput}>Senha *</Text>
                    <TextInput
                        mode="outlined"
                        placeholder="Digite sua senha"
                        style={style.input}
                        onFocus={() => setPassword({ isActive: true, })}
                        value={password}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        container: {
            flex:1,
            padding: 16,
        },
        image:{
            alignItems:"center"
        },
        content: {
            flex: 7,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 24
        },
        contentInput: {
            width: '100%',
            gap: 8
        },
        input: {
            borderWidth: 1,
            borderColor: '#CCC4D8',
            backgroundColor: 'none',
            borderRadius: 8
        },

        labelInput: {
            fontFamily: comonStyles.fontFamily,
        },
    }
)