import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

export default props => {
    return(
        <SafeAreaView style={style.container}>
            <Text style={style.textoVe} >Verifique seu e-mail</Text>
            <Text style={style.txt} >Acesse o link que enviamos por e-mail para definir</Text>
            <Text style={style.txt} >sua nova senha.</Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        container:{
            flex:1
        },
        textoVe:{
            fontSize:30,
            color:'#000000',
            textAlign:'center',
            margin:40
        },
        txt:{
            textAlign:'center',
            color:'#2E2B33',
            fontSize:17
        }
    }
)