import React from "react";
import { SafeAreaView, Text, ImageBackground, StyleSheet, Image, Pressable, View } from "react-native";
import Splash from '../../assets/imgs/spalsh.png';
import comonStyles from "../comonStyles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default props => {
    return (
        <SafeAreaView style={Style.container} >
            <ImageBackground source={Splash} style={Style.img} >

                <View style={Style.imgLogo}>
                    <Image source={require('../../assets/imgs/LogoDefaut.png')} />
                </View>

                <View style={Style.btn}>
                    <Pressable onPress={() => props.navigation.navigate('InicialLogin')} >
                        <Text style={Style.txt}>Continuar </Text>
                    </Pressable>
                </View>

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
            padding: 120

        },
        imgLogo: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 2
        },
        btn: {
            backgroundColor: comonStyles.colors.primary,
            padding: 5,
            width: 270,
            padding: 10,
            borderRadius: 8
        },
        txt: {
            color: 'white',
            marginLeft: 82,
            fontSize: 18
        }
    }
)