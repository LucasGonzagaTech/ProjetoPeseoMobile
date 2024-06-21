import React from "react";
import { StyleSheet, SafeAreaView, Text, Image, View, Pressable, StatusBar } from "react-native";
import Avatar from '../../assets/imgs/Avatar.png'
import comonStyles from "../comonStyles";
import Icon from "react-native-vector-icons/Ionicons";

export default props => {
    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.img} >
                <Image source={Avatar} />
                <Text style={styles.name} >Nami</Text>
            </View>
            <Text style={styles.border}>Minhas informações</Text>

            <View>
                <Text>Nome</Text>
                <Text>Nami</Text>
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
        border:{
            borderBottomColor:'#B6BBC4',
            borderBottomWidth:1,
            width:'100%',
            padding:5,
            fontSize:18
        },
        
    }
)