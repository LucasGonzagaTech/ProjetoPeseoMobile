import React from "react";
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, Image, Pressable } from "react-native";
import pgLogin from '../../assets/imgs/pgLogin.png'
import comonStyles from "../comonStyles";

export default props => {
    return (
        <SafeAreaView style={Style.container} >
            <ImageBackground source={pgLogin} style={Style.img} >

                <View style={Style.margintxt} >
                    <Text style={Style.text} >Seja</Text>
                    <Text style={Style.text} >Bem-Vindo(a)</Text>
                    <Text style={Style.text} >A PESEO</Text>
                </View>

                <View style={Style.btn}>
                    <Pressable onPress={() => props.navigation.navigate('Login')} >
                        <Text style={Style.txt}>Continuar</Text>
                    </Pressable>
                </View>

                <Pressable style={Style.botao} onPress={() => props.navigation.navigate('Cadastro')} >
                     <Text style={Style.txt} >Criar Conta</Text>
                </Pressable>
            </ImageBackground>
        </SafeAreaView>
    )
}

const Style = StyleSheet.create(
    {
        container: {
            flex: 1,

        },
        img: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',

        },
        btn: {
            backgroundColor: comonStyles.colors.primary,
            width: 350,
            padding: 13,
            borderRadius: 8,
            marginTop: 150
        },
        txt: {
            color: 'white',
            marginLeft: 125,
            fontSize: 15
        },
        text: {
            color: comonStyles.colors.primary,
            fontSize: 33,
            fontFamily: comonStyles.fontFamily

        },
        margintxt: {
            padding: 90,
        },
        botao:{
           backgroundColor:'none',
           borderWidth:1,
           borderColor:'#FFFFFF',
           width: 350,
           padding:13,
           marginTop:25,
           borderRadius:8
        }
    }
)