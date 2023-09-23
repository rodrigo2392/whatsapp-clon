import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ant from 'react-native-vector-icons/AntDesign';
import Text from './Text';
import ProfileImage from './ProfileImage';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#085e55',
    paddingHorizontal: width * 0.05,
    flexDirection: 'row',
    paddingVertical: height * 0.01,
  },
  title: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '500',
  },
  titleContainer: {
    width: width * 0.75,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsContainer: {
    width: width * 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Header({
  name,
  image,
  navigation,
}: {
  name: string;
  image: string;
  navigation: any;
}) {
  return (
    <>
      <StatusBar backgroundColor="#034a42" />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.goBack()}>
          <Ant name="arrowleft" color="#FFF" size={25} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <ProfileImage small image={image} />
          <Text bold text={name} size={24} />
        </View>
        <View style={styles.iconsContainer}>
          <Entypo name="dots-three-vertical" color="#FFF" size={20} />
        </View>
      </View>
    </>
  );
}
