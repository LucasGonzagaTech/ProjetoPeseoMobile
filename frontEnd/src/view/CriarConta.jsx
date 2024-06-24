import React from "react";
import { StyleSheet, SafeAreaView, Text, Image, View, Pressable, StatusBar, KeyboardAvoidingView } from "react-native";
import {TextInput } from "react-native-paper";
import comonStyles from "../comonStyles";
import logo from '../../assets/imgs/logoRight.png';
import Icon from "react-native-vector-icons/Ionicons";

export default props => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [tel, setTel] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const [error, setError] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    
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
            return name.trim() !=='' && email.trim() !== '' && tel.trim() !=='' && password.trim() !== '' && confirmPassword.trim() !== '';
        };
    
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
                <View style={styles.image}>
                    <Image source={logo} />
                </View>

                <View style={styles.content}>
                    <InputField 
                        label="Nome *" 
                        placeholder="Digite seu nome completo" 
                        value={name} 
                        onChangeText={setName} 
                    />
                    <InputField 
                        label="E-mail *" 
                        placeholder="Digite seu email" 
                        value={email} 
                        onChangeText={setEmail} 
                    />
                    <InputField 
                        label="Telefone *" 
                        placeholder="Digite seu telefone" 
                        value={tel} 
                        onChangeText={setTel} 
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
                    <InputField 
                        label="Confirma senha *" 
                        placeholder="Confirme sua senha" 
                        value={confirmPassword} 
                        onChangeText={setConfirmPassword} 
                        secureTextEntry={!showConfirmPassword}
                        icon={showConfirmPassword ? "eye" : "eye-off"} 
                        onPress={() => setShowConfirmPassword(!showConfirmPassword)} 
                    />
                    {error ? <Text style={styles.error}>{error}</Text> : null}
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
                        <Text style={styles.buttonText}>Criar Conta</Text>
                    </Pressable>
                    {/* <Text> ou entre </Text>
                    <Pressable style={styles.buttonGoogle}>
                        <Icon name="logo-google" size={18} color="#5A19FF" />
                        <Text style={styles.buttonTextGoogle}>Google</Text>
                    </Pressable> */}
                    <Text> Já tem conta? Entrar </Text>
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
            flex: 7,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 18
        },
        contentInput: {
            width: '100%',
            gap: 4
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
    });