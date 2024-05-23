import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity, Alert
} from "react-native";

import {Login, LoginButton} from '../components/Login';
import {StackNavigationProp} from '@react-navigation/stack';
import {login} from '../api/api.ts';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Door: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export const LoginScreen: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    // Тут ви можете виконати логіку перевірки облікових даних
    // Якщо облікові дані вірні, перейдіть на сторінку керування дверима
    try {
      const user = await login(email, password);
      console.log(user);
      navigation.navigate('Door');
    } catch (error: any) {
      Alert.alert('Помилка', error.message);
      console.log('Error message from login: ', error.message);
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Login
        username={email}
        setUsername={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginButton onPress={handleLogin} />
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Не маєте акауту?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpButton}>Реєстрація</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    justifyContent: 'center',
  },
  signUpContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#fff',
  },
  signUpButton: {
    color: '#4CAF50',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default LoginScreen;
