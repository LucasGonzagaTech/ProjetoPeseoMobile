import React from "react";
import { StyleSheet, SafeAreaView, Text, Image, View, Pressable, StatusBar, KeyboardAvoidingView } from "react-native";
import {TextInput } from "react-native-paper";
import comonStyles from "../comonStyles";
import logo from '../../assets/imgs/logoRight.png';
import Icon from "react-native-vector-icons/Ionicons";

export default props => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
   

    const [error, setError] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    
        const validatePassword = () => {
            if (password !== confirmPassword) {
                setError('As senhas não coincidem.');
                return false;
            }
            setError('');
            return true;
        };
    
        const handleSignUp = () => {
            if (validatePassword()) {
                //ligação com api
                console.log('Conta criada com sucesso!');
            }
        };
    
        const areInputsFilled = () => {
            return email.trim() !== '' && password.trim() !== '' ;
        };
    
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
                <View style={styles.image}>
                    <Image source={logo} />
                </View>

                <View style={styles.content}>
                    <InputField 
                        label="E-mail *" 
                        placeholder="Digite seu email" 
                        value={email} 
                        onChangeText={setEmail} 
                    />
                    <InputField 
                        label="Senha *" 
                        placeholder="Digite sua senha" 
                        value={password} 
                        onChangeText={setPassword} 
                        secureTextEntry={!showPassword}
                        icon={showPassword ? "eye" : "eye-off"} 
                        onPress={() => setShowPassword(!showPassword)} 
                    />
                   
                   <Text onPress={() => props.navigation.navigate('Recuperar Senha')} >Esqueci minha senha</Text>

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
                        onPress={handleSignUp}
                        disabled={!areInputsFilled()}
                    >
                        <Text style={styles.buttonText}>Entrar</Text>
                    </Pressable>
                    <Text> ou entre </Text>
                    <Pressable style={styles.buttonGoogle}>
                        <Icon name="logo-google" size={18} color="#5A19FF" />
                        <Text style={styles.buttonTextGoogle}>Google</Text>
                    </Pressable>
                    <Text> Não tem uma conta? <Text style={styles.txtEntrar} >Criar conta</Text></Text>
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
            flex: 2,
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