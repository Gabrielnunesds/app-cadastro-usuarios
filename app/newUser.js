import { Pressable, Text, View, TextInput} from "react-native";
import { styles } from "../src/styles"; 
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/firebase.config";
import { router } from "expo-router";

export default function NewUser() {
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userRePass, setUserRePass] = useState('');

    function newUser() {
       if(userMail === '' || userPass === '' || userRePass === ''){
        alert('Todos os campos devem ser preenchidos');
        return;
       }
       if (userPass !== userRePass){
        alert ('A senha e a confirmação nao são iguais');
        return;
       } else {
            createUserWithEmailAndPassword(auth, userMail, userPass)
            .then((userCredencial) => {
                const user = userCredencial.user;
                alert('O usuario ' +userMail+ ' foi criado. Faça o login');
                router.replace('/');
            })
            .catch((error) => {
                const errorMessage =errorMessage;
                alert (errorMessage);
                router.replace('/');

            });
       }
    }   

    return(
        <View style={styles.container}>
            <Text style={styles.formTitle}> Novo Usuário</Text>
            <TextInput
                style={styles.formInput}
                placeholder="E-mail de usuário"
                keyboardType="email-adress"
                autoCapitalize="none"
                autoComplete="email"
                value={userMail}
                onChangeText={setUserMail}
            />
            <TextInput
                style={styles.formInput}
                placeholder="Senha de Usuário"
                autoCapitalize="none"
                secureTextEntry
                value={userPass}
                onChangeText={setUserPass}
            />
            <TextInput
                style={styles.formInput}
                placeholder="Repita a senha"
                autoCapitalize="none"
                secureTextEntry
                value={userRePass}
                onChangeText={setUserRePass}
            />
            <Pressable
                style={styles.formButton}
                onPress={newUser}
            >
                <Text style={styles.textButton}>
                    Cadastrar
                </Text>
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