import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

export default function ProfileImage({
  image,
  small,
}: {
  image: string;
  small?: boolean;
}) {
  const styles = StyleSheet.create({
    imageContainer: {
      padding: 10,
    },
    image: {
      height: small ? 40 : 60,
      width: small ? 40 : 60,
      borderRadius: 30,
    },
  });

  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: image}} />
    </View>
  );
}
