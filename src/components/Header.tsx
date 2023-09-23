import React from 'react';
import {View, StyleSheet, StatusBar, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Text from './Text';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#085e55',
    paddingHorizontal: width * 0.05,
    flexDirection: 'row',
    paddingVertical: height * 0.02,
  },
  title: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '500',
  },
  titleContainer: {
    width: width * 0.75,
    justifyContent: 'center',
  },
  iconsContainer: {
    width: width * 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default function Header() {
  return (
    <>
      <StatusBar backgroundColor="#034a42" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text bold text="WhatsApp" size={24} />
        </View>
        <View style={styles.iconsContainer}>
          <Icon name="search" color="#FFF" size={20} />
          <Entypo name="dots-three-vertical" color="#FFF" size={20} />
        </View>
      </View>
    </>
  );
}
