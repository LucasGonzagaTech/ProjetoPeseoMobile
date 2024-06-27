import React from "react";
import { StyleSheet, SafeAreaView, Text, Image, View, Pressable, StatusBar } from "react-native";
import Avatar from '../../assets/imgs/Avatar.png'
import comonStyles from "../comonStyles";
import Icon from "react-native-vector-icons/AntDesign";
import FotoPerfil from '../../assets/imgs/fotoperfil.png'

export default props => {
    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.img} >
                <Image source={FotoPerfil} />
                <Text style={styles.name} >Nami</Text>
            </View>

            <Text style={styles.txtInfo}>Minhas informações</Text>

            <View style={styles.border}>
            </View>


            <View style={styles.icon}>
                <View>
                    <Text style={styles.txtName}>Nome</Text>
                    <Text style={styles.txtpqn}>Nami</Text>
                </View>
                <Icon style={styles.icone} name="right" color="black" size={25} />
            </View>

            <View style={styles.border}>
            </View>


            <View style={styles.icon}>
                <View>
                    <Text style={styles.txtName}>E-mail</Text>
                    <Text style={styles.txtpqn}>email@gmail.com</Text>
                </View>
                <Icon style={styles.iconmail} name="right" color="black" size={25} />
            </View>

            <View style={styles.border}>
            </View>


            <Text style={styles.txt} >Opções do aplicativo</Text>

            <View style={styles.border}>
            </View>

            <View style={styles.icon}>
                <View>
                    <Text style={styles.txtSair}>Sair do aplicativo</Text>
                </View>
                <Icon style={styles.iconSair} name="right" color="black" size={25} />
            </View>




        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 16
        },
        img: {
            marginTop: 42,
            alignItems: "center"
        },
        name: {
            fontSize: 25,
            color: '#242424',
            alignItems: 'center',
            margin: 15,
            marginLeft: 1,
        },
        border: {
            borderBottomColor: '#B6BBC4',
            borderBottomWidth: 1,
            width: '100%',
            padding: 5,
        },
        txtName: {
            color: '#242424',
            fontSize: 20,
            margin: 5
        },
        txtpqn: {
            marginLeft: 5
        },
        icon: {
            alignItems: 'center',
            flexDirection: `row`,
        },
        icone: {
            marginLeft: "70%",
            margin: 2,

        },
        iconmail: {
            marginLeft: "57%",
            margin: 2
        },
        txt: {
            color: '#2E2B33',
            fontSize: 18,
            margin:10
        },
        txtSair: {
            fontSize: 18,
            color: "#5A5364",
            marginBottom: 15,
            margin: 8
        },
        iconSair: {
            marginLeft: "48%",
            margin: 2
        },
        txtInfo: {
            fontSize: 18,
            color: '#2E2B33'
        }

    }
)