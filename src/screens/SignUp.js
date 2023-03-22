import { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
const chatImage = require('../assets/chatImage.png');



export default function Login ({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleSignUp = () => {
    if(email !== '' && password !== '') {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log('SignUp Succefully'))
        .catch((err) => Alert.alert('SignUp Error', err.message));
    }
  };


  return (
    <View style={styles.container} >
      <View style={styles.logo}>
        <Image source={chatImage} style={styles.chatImage}/>
        <Text style={styles.titleLogo}>ChatApp</Text>
      </View>
      <SafeAreaView style={styles.form}>
        <Text style={{fontSize: 36, fontWeight:'bold', alignSelf:'center', paddingBottom: 20}}>Create Account</Text>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Email'
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
          autoFocus={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.title}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter password'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          textContentType='password'
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={onHandleSignUp}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>SignUp</Text>
        </TouchableOpacity>
        <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap:4}}>
          <Text>Já possui uma conta?</Text>
          <TouchableOpacity onPressIn={() => navigation.navigate('Login')}>
            <Text style={{color: '#f57c00', fontWeight: '500', fontSize: 14}}>Login</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // height: 100,
    padding: 20,
    gap: 20,
    // backgroundColor: '#ffafaf',
    marginTop: 100
  },
  chatImage: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  titleLogo: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  form: {
    flex: 1,
    padding: 10,
    marginHorizontal: 30,
    marginTop: 40
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center'
  },
  input: {
    backgroundColor: '#F6F7FB',
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
    borderBottomWidth: 1,
    elevation: 1
  },
  button: {
    backgroundColor: '#f57c00',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
});
