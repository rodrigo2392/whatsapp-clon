import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Text from './Text';
import Icon from 'react-native-vector-icons/Ionicons';
import Awesome from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#034a42',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  iconContainer: {
    backgroundColor: '#2A373D',
    width,
    height: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Call({
  visible,
  close,
}: {
  visible: boolean;
  close: () => void;
}) {
  return (
    <Modal visible={visible} onRequestClose={close}>
      <View style={styles.container}>
        <View style={{marginBottom: width * 0.2, alignItems: 'center'}}>
          <Text size={32} text="Leonardo" />
          <Text text="Marcando" />
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={{width: 200, height: 200}}
            source={{
              uri: 'https://cdn2.iconfinder.com/data/icons/everything-in-office/65/icon_Ai-11-512.png',
            }}
          />
          <TouchableOpacity onPress={close} style={styles.button}>
            <Icon name="call" size={25} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingRight: 60,
            paddingLeft: 60,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            width: width,
            height: width * 0.2,
          }}>
          <Icon name="volume-high" size={25} color="#FFF" />
          <Icon name="videocam" size={25} color="#FFF" />
          <Awesome name="microphone" size={25} color="#FFF" />
        </View>
      </View>
    </Modal>
  );
}
