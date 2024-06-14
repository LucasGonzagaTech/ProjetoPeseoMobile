import React from "react";
import { StyleSheet, SafeAreaView, Text, Image, View, Pressable, StatusBar } from "react-native";
import { TextInput } from "react-native-paper";

import comonStyles from "../comonStyles";
import logo from '../../assets/imgs/logoRight.png'

import Icon from "react-native-vector-icons/Ionicons";

export default props => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirpassword, setConfirPassword] = React.useState('');

    return (
        <SafeAreaView style={style.container}>
            <StatusBar
                barStyle="dark-content" // Altera o estilo do texto para claro
                backgroundColor="#f2f2f2" // Altera a cor de fundo da barra de status
            />
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
                        secureTextEntry={true}
                        style={style.input}
                        onFocus={() => setPassword({ isActive: true, })}
                        value={password}
                    />
                </View>

                <View style={style.contentInput}>
                    <Text style={style.labelInput}>Confirma senha *</Text>
                    <TextInput
                        mode="outlined"
                        placeholder="Confirme sua senha"
                        style={style.input}
                        secureTextEntry={true}
                        onFocus={() => setPassword({ isActive: true, })}
                        value={password}
                    />
                </View>
            </View>

            <View style={{ flex: 2, gap: 4, alignItems: "center" }}>
                <Pressable style={style.button}>
                    <Text style={style.buttonText}>Criar Conta</Text>
                </Pressable>
                <Text> ou entre </Text>
                <Pressable style={style.buttonGoogle}>
                    <Icon name="logo-google" size={18} color="#5A19FF" />
                    <Text style={style.buttonTextGoogle}>Google</Text>
                </Pressable>
                <Text> Já tem conta? Entrar </Text>
            </View>

        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 16,
        },

        image: {
            marginTop:42,
            alignItems: "center"
        },

        content: {
            flex: 5,
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

        button: {
            width: '100%',
            borderRadius: 8,
            paddingTop: 16,
            paddingBottom: 16,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: comonStyles.colors.primary,
        },

        buttonGoogle: {
            gap: 8,
            flexDirection: "row",
            width: '100%',
            borderRadius: 8,
            paddingTop: 16,
            paddingBottom: 16,
            justifyContent: "center",
            alignItems: "center",
            borderColor: comonStyles.colors.primary,
            borderWidth: 1
        },

        buttonText: {
            fontSize: 14,
            fontWeight: '700',
            color: '#FFF'
        },

        buttonTextGoogle: {
            fontSize: 14,
            fontWeight: '700',
            color: '#5A19FF'
        },

    }
)