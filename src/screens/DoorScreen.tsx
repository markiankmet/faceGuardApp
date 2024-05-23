import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {CustomButton} from '../components/CustomButton';
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

export const DoorScreen: React.FC<Props> = ({navigation}) => {
  const handleOpenDoor = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Door Control</Text>
        </View>
        {/*<View style={styles.imageContainer}>*/}
        {/*  <Image source={require('../assets/door.png')} style={styles.image} />*/}
        {/*</View>*/}
        <CustomButton title="Open Door" onPress={handleOpenDoor} />
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
