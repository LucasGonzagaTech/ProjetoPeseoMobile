import React from "react";
import { StyleSheet, SafeAreaView, Text, Image, View, Pressable, StatusBar } from "react-native";
import Avatar from '../../assets/imgs/Avatar.jpg'
import comonStyles from "../comonStyles";
import Icon from "react-native-vector-icons/AntDesign";

export default props => {
    return (
        <View style={styles.container} >

            <View style={styles.img} >
                <Image source={Avatar} />
                <Text style={styles.name} >Usuário</Text>
            </View>

            <Text style={styles.txtInfo}>Minhas informações</Text>

            <View style={styles.icon}>
                <View>
                    <Text style={styles.TitleText}>Nome</Text>
                    <Text style={styles.txtpqn}>Usuário</Text>
                </View>
                <Icon style={styles.icone} name="right" color="black" size={16} />
            </View>

            <View style={styles.icon}>
                <View>
                    <Text style={styles.TitleText}>E-mail</Text>
                    <Text style={styles.txtpqn}>usuario@gmail.com</Text>
                </View>
                <Icon style={styles.iconmail} name="right" color="black" size={16} />
            </View>

            <Text style={styles.txtInfo} >Opções do aplicativo</Text>

            <View style={styles.icon}>
                <View>
                    <Text style={styles.txtSair}>Sair do aplicativo</Text>
                </View>
                <Icon style={styles.iconSair} name="right" color="black" size={16} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ffffff'
        },
        img: {
            gap:5,
            paddingVertical:16,
            marginTop: 42,
            alignItems: "center",
            borderBottomWidth:1,
            borderColor: '#F4F4F4'
        },
        name: {
            color: '#242424',
            fontSize:24,
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
        TitleText: {
            color: '#242424',
            fontSize: 14,
            fontWeight:"bold"
        },
        txtpqn: {
            marginLeft: 5
        },
        icon: {
            borderBottomWidth:1,
            borderColor: '#F4F4F4',
            paddingVertical:16,
            alignItems: 'center',
            flexDirection: `row`,
            paddingHorizontal:16,
            justifyContent: 'space-between'
        },
        txt: {
            color: '#2E2B33',
            fontSize: 18,
            margin:10
        },
        txtSair: {
            fontSize: 16,
            color: "#5A5364",
            paddingVertical:16,
            fontWeight:"bold",
        },
        txtInfo: {
            borderBottomWidth:1,
            borderColor: '#F4F4F4',
            paddingVertical:16,
            paddingHorizontal:16,
            fontSize: 16,
            color: '#2E2B33'
        }

    }
)