import React, {FC} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface DoorButtonProps {
  onLock: () => void;
  onUnlock: () => void;
}

const DoorButton: FC<DoorButtonProps> = ({onLock, onUnlock}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onLock}>
        <Text style={styles.buttonText}>Lock</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onUnlock}>
        <Text style={styles.buttonText}>Unlock</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export {DoorButton};
