import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

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

export const BottomNavigation: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Activity')}
        style={styles.iconContainer}>
        <Image source={require('../assets/activity.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Door')}
        style={styles.iconContainer}>
        <Image source={require('../assets/apps.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('UserProfile')}
        style={styles.iconContainer}>
        <Image source={require('../assets/user.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={styles.iconContainer}>
        <Image source={require('../assets/settings.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1c1c1e',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  iconContainer: {
    backgroundColor: '#2c2c2e',
    borderRadius: 15,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
