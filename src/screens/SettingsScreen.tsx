import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomNavigation} from '../navigation/BottomTabNavigator.tsx';

type RootStackParamList = {
  Door: undefined;
  Activity: undefined;
  UserProfile: undefined;
  Settings: undefined;
  Login: undefined;
};

type DoorScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Door'>;

type Props = {
  navigation: DoorScreenNavigationProp;
};

export const SettingsScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Settings</Text>
        </View>
      </View>

      <BottomNavigation navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 50,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  imageContainer: {
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
});
