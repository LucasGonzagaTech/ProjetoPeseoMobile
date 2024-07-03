import React from "react";
import { StyleSheet, SafeAreaView, Text, Image, View, Pressable, StatusBar, KeyboardAvoidingView } from "react-native";
import {TextInput } from "react-native-paper";
import comonStyles from "../comonStyles";
import logo from '../../assets/imgs/logoRight.png';
import Icon from "react-native-vector-icons/Ionicons";
//ds
export default props => {
    const [nome, setNome] = React.useState('');
    const [name, setName] = React.useState('')
   

    const [error, setError] = React.useState('');
    const [showNome, setShowNome] = React.useState(false);
    
      function alterar() {
           setName('Nome alterado com sucesso!')
      }
    

    
        const areInputsFilled = () => {
            return nome.trim() !== '' ;
        };
    
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />

                <Text style={styles.alterarname}>Altere seu nome</Text>

                <View style={styles.content}>
                    <InputField 
                        label="Nome *" 
                        placeholder="Digite seu nome" 
                        value={nome} 
                        onChangeText={setNome} 
                        onPress={() => setShowNome(!showNome)} 
                    />
                      <Text style={styles.name} >{name}</Text>

                </View>


                <View style={styles.buttonContainer}>
                    <Pressable 
                        style={({ pressed }) => [
                            {
                                backgroundColor: !areInputsFilled() ? '#d3d3d3' : pressed ? '#3700B3' : comonStyles.colors.primary,
                                opacity: !areInputsFilled() ? 0.7 : 1,
                            },
                            styles.button
                        ]}
                        onPress={alterar}
                        disabled={!areInputsFilled()}
                    >
                    <Text style={styles.buttonText}>Entrar</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        );
    };
    
    const InputField = ({ label, placeholder, value, onChangeText, secureTextEntry, icon, onPress }) => (
             <View style={styles.contentInput}>
            <Text style={styles.labelInput}>{label}</Text>
            <TextInput
                mode="outlined"
                placeholder={placeholder}
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
                right={icon ? <TextInput.Icon icon={icon} onPress={onPress} /> : null}
            />
        </View>
       
    );
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
        },
        image: {
            marginTop: 42,
            alignItems: "center"
        },
        content: {
            flex: 6,
            justifyContent: "flex-start",
            alignItems: "center",
        },
        contentInput: {
            width: '100%',
            
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
        buttonContainer: {
            flex: 1,
            gap: 4,
            alignItems: "center"
        },
        button: {
            width: '100%',
            borderRadius: 8,
            paddingTop: 16,
            paddingBottom: 17,
            justifyContent: "center",
            alignItems: "center",
        },
    
        buttonText: {
            fontSize: 14,
            fontWeight: '700',
            color: '#FFF'
        },

        txtEntrar:{
            color:'#5A19FF'
        },
        alterarname:{
            fontSize:25,
            color:'#242424',
            margin:20
        },
        name:{
            color:'#616161',
            margin:"10%" 
        }
    });

