import React from "react";
import { SafeAreaView, Text, ImageBackground, StyleSheet, Image, Pressable, View } from "react-native";
import Splash from '../../assets/imgs/spalsh.png';
import comonStyles from "../comonStyles";

export default props => {
    return (
        <SafeAreaView style={Style.container} >
            <ImageBackground source={Splash} style={Style.img} >

                <View style={Style.imgLogo}>
                    <Image source={require('../../assets/imgs/LogoDefaut.png')} />
                </View>

                <View style={Style.btn}>
                    <Pressable onPress={() => props.navigation.navigate('InicialLogin')} >
                        <Text style={Style.txt}>Continua</Text>
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
            padding: 13,
            width: 350,
            borderRadius: 8
        },
        txt: {
            color: 'white',
            marginLeft: 125,
            fontSize: 18,
        }
    }
)