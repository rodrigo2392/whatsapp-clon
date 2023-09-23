import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props {
  text: string;
  color?: string;
  size?: number;
  bold?: boolean;
  black?: boolean;
}

export default function TextElement({text, color, size, bold, black}: Props) {
  const styles = StyleSheet.create({
    text: {
      color: color ? color : black ? '#000' : '#FFF',
      fontSize: size ? size : 18,
      fontWeight: bold ? '600' : '400',
    },
  });

  return <Text style={styles.text}>{text}</Text>;
}
