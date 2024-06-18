import React from "react";
import { StyleSheet, SafeAreaView, Text, Image, View, Pressable, StatusBar } from "react-native";
import { TextInput } from "react-native-paper";
import comonStyles from "../comonStyles";
import logo from '../../assets/imgs/logoRight.png';
import Icon from "react-native-vector-icons/Ionicons";

export default props => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [error, setError] = React.useState('');

    //Ocultar e mostra senha.
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    //Confirmação de senha.
    const validatePassword = () => {
        // if (password.length < 8) {
        //     setError('A senha deve ter pelo menos 8 caracteres.');
        //     return false;
        // }
        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSignUp = () => {
        if (validatePassword()) {
            // Lógica para criar a conta, como uma chamada de API
            console.log('Conta criada com sucesso!');
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
            <View style={style.image}>
                <Image source={logo} />
            </View>

            <View style={style.content}>
                <View style={style.contentInput}>
                    <Text style={style.labelInput}>E-mail *</Text>
                    <TextInput
                        mode="outlined"
                        placeholder="Digite seu email"
                        style={style.input}
                        onChangeText={setEmail}
                        value={email}
                    />
                </View>

                <View style={style.contentInput}>
                    <Text style={style.labelInput}>Senha *</Text>
                    <TextInput
                        mode="outlined"
                        placeholder="Digite sua senha"
                        secureTextEntry={!showPassword}
                        style={style.input}
                        onChangeText={setPassword}
                        right={<TextInput.Icon 
                            icon={showPassword ? "eye" : "eye-off"} 
                            onPress={() => setShowPassword(!showPassword)} />
                        }
                        value={password}
                    />
                </View>

                <View style={style.contentInput}>
                    <Text style={style.labelInput}>Confirma senha *</Text>
                    <TextInput
                        mode="outlined"
                        placeholder="Confirme sua senha"
                        secureTextEntry={!showConfirmPassword}
                        style={style.input}
                        onChangeText={setConfirmPassword}
                        right={<TextInput.Icon 
                            icon={showConfirmPassword ? "eye" : "eye-off"} 
                            onPress={() => setShowConfirmPassword(!showConfirmPassword)} />
                        }
                        value={confirmPassword}
                    />
                </View>
                {error ? <Text style={style.error}>{error}</Text> : null}
            </View>

            <View style={{ flex: 2, gap: 4, alignItems: "center" }}>
                <Pressable style={style.button} onPress={handleSignUp}>
                    <Text style={style.buttonText}>Criar Conta</Text>
                </Pressable>
                <Text> ou entre </Text>
                <Pressable style={style.buttonGoogle}>
                    <Icon name="logo-google" size={18} color="#5A19FF" />
                    <Text style={style.buttonTextGoogle}>Google</Text>
                </Pressable>
                <Text> Já tem conta? Entrar </Text>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
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
    button: {
        width: '100%',
        borderRadius: 8,
        paddingTop: 16,
        paddingBottom: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: comonStyles.colors.primary,
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
