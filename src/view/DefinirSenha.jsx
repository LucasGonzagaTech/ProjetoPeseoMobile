import React from "react";
import { StyleSheet, SafeAreaView, Text, Image, View, Pressable, StatusBar} from "react-native";
import {TextInput } from "react-native-paper";
import comonStyles from "../comonStyles";
import logo from '../../assets/imgs/logoRight.png';
import Icon from "react-native-vector-icons/Ionicons";

export default props => {
    const [senha, setSenha] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [aviso,setAviso] = React.useState('')
   

    const [error, setError] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

 
    
    
        const areInputsFilled = () => {
            return senha.trim() !== '' && password.trim() !== '' ;
        };

        // function aviso (){
        //     setAviso('Senha alterada com sucesso')
            
        // }
    
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
                <View style={styles.image}>
                    <Image source={logo} />
                </View>

                <View style={styles.content}>
                    <InputField 
                        label="Senha *" 
                        placeholder="Digite sua nova senha" 
                        value={senha} 
                        onChangeText={setSenha} 
                        secureTextEntry={!showPassword}
                        icon={showPassword ? "eye" : "eye-off"} 
                       
                    />
                    <InputField 
                        label="Confirmar Senha*" 
                        placeholder="Confirme sua nova senha" 
                        value={password} 
                        onChangeText={setPassword} 
                        secureTextEntry={!showPassword}
                        icon={showPassword ? "eye" : "eye-off"} 
                       
                    />
                   

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
                         
                        disabled={!areInputsFilled()}
                    >
                        <Text style={styles.buttonText}>Voltar</Text>
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
        error: {
            color: 'red',
            marginTop: 8,
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
            paddingBottom: 16,
            justifyContent: "center",
            alignItems: "center",
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
        txtEntrar:{
            color:'#5A19FF'
        }
    });