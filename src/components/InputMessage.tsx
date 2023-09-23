import React from 'react';
import {View, StyleSheet, TextInput, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: 'transparent',
    height: height * 0.09,
    paddingHorizontal: 20,
    flexDirection: 'row',
    bottom: height * 0.08,
    position: 'absolute',
  },
  input: {
    backgroundColor: '#FFF',
    width: width * 0.75,
    height: width * 0.12,
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 10,
    paddingLeft: 20,
    borderColor: '#A8A6A6',
  },
  voiceNoteContainer: {
    marginTop: 10,
    backgroundColor: '#00d55b',
    height: width * 0.12,
    width: width * 0.12,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default function InputMessage() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <View style={styles.voiceNoteContainer}>
        <Icon name="keyboard-voice" size={30} color="#FFF" />
      </View>
    </View>
  );
}
