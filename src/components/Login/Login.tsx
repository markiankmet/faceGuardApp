import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomInput} from '../CustomInput.tsx';

interface LoginProps {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

export const Login: React.FC<LoginProps> = ({
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Увійти</Text>
      <CustomInput
        placeholder="Введіть свій Email"
        value={username}
        onChangeText={setUsername}
      />
      <CustomInput
        placeholder="Введіть свій пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
});
