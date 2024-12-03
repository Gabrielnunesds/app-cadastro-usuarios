import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../src/styles";
import { useState } from "react";
import { useRouter } from "expo-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../src/firebase.config";

export default function replacePass(){
    const [userMail, setUserMail] = useState('');
    const router = useRouter();

    function replacePass() {
        if (userMail !== ''){
                sendPasswordResetEmail(auth, userMail)
                .then(() => {
                    alert("Foi enviado um email para: " + userMail + ". Verifique a sua caixa de email.");
                    router.replace('/');
                })
                .catch((error) =>{
                    const errorMessage = error.message;
                    alert("Ops alguma coisa não deu certo. " + errorMessage + ". Tente novamente ou pressione voltar");
                    return;
                });
        } else {
            alert("É preciso informar um e-mail válido para efetuar a redefinição de senha")
            return;
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.formTitle}>Redefinicão de Senha</Text>
            <TextInput
                style={styles.formInput}
                placeholder="Informe o email"
                keyboardType="email-adress"
                autoCapitalize="none"
                autoComplete="email"
                value={userMail}
                onChangeText={setUserMail}
            />
            <Pressable
                style={styles.formButton}
                onPress={replacePass}
            >
                <Text style={styles.textButton}>Enviar</Text>

            </Pressable>
            <View style={styles.subContainer}>
                <Pressable
                    onPress={() => router.push("/")}
                >
                        <Text style={styles.subTextButton}>Voltar</Text>
                    </Pressable>
            </View>
        </View>
    );
}