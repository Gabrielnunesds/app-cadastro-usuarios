import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from '../src/styles';
import { useState } from 'react';
import { auth } from '../src/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';

export default function App() {
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const router = useRouter();

  function replacePass(){
    router.replace('/replacePass');
  }

  function newUser(){
    router.replace('/newUser');
  }

  function userLogin(){
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace('/home');
      })
      .catch((error) =>{  
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      })
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login no sistema</Text>
      <TextInput style={styles.formInput}
        placeholder="Informe o e-mail"
        keyboardType="email-adress"
        autoCapitalize= "none"
        autoComplete="email"
        value={userMail}
        onChangeText={setUserMail}
      />
      <TextInput style={styles.formInput}
        placeholder='Informe a senha'
        autoCapitalize='none'
        secureTextEntry
        value={userPass}
        onChangeText={setUserPass}
      />
      <Pressable style={styles.formButton}
        onPress={userLogin}>
        
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}
          onPress={replacePass}
        >
          <Text style={styles.subTextButton}>Esqueci a senha</Text>
        </Pressable>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton} onPress={newUser}>
            Cadastrar
          </Text>
        </Pressable>
      </View>
      <StatusBar style='auto'/>
    </View>
  );
}