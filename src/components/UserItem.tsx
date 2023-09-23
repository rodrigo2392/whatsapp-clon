import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from './Text';

interface ItemProps {
  image: string;
  name: string;
  description: string;
  missing?: boolean;
  withBorder?: boolean;
}

export default function UserItem({
  image,
  name,
  description,
  missing,
  withBorder,
}: ItemProps) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 15,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderColor: '#00d55b',
      borderWidth: withBorder ? 2 : 0,
    },
    textContainer: {
      paddingLeft: 20,
    },
  });
  return (
    <>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text color={missing ? '#DE2E2E' : '#000'} text={name} />
          <Text size={16} color="#727171" text={description} />
        </View>
      </View>
    </>
  );
}
