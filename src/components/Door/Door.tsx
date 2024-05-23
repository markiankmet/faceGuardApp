import React, {FC} from 'react';
import { View, Image, StyleSheet, Text } from "react-native";

interface DoorProps {
  isLocked: boolean;
}

const Door: FC<DoorProps> = ({isLocked}) => {
  // const doorImage = isLocked
  //   ? require('../assets/door-locked.png')
  //   : require('../assets/door-unlocked.png');

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      {/*<Image source={doorImage} style={styles.image} />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export {Door};
