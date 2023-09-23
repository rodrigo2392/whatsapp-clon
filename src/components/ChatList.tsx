import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  FlatList,
} from 'react-native';
import {messages} from '../constants/chats';
import Text from './Text';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.9,
  },
  back: {
    flex: 1,
  },
  list: {
    marginBottom: height * 0.165,
    paddingBottom: 20,
  },
});

export default function ChatList() {
  const stylesBubble = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      paddingLeft: 15,
    },
    containerLeft: {
      alignItems: 'flex-end',
      paddingRight: 15,
    },
    bubble: {
      backgroundColor: '#FFF',
      borderRadius: 15,
      marginTop: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      maxWidth: width * 0.8,
    },
  });
  const renderMessage = ({item}: {item: any}) => {
    return (
      <View
        key={item.id}
        style={
          item.sender === 1
            ? stylesBubble.container
            : stylesBubble.containerLeft
        }>
        <View
          style={[
            stylesBubble.bubble,
            item.sender === 1 && {backgroundColor: '#e2ffc7'},
          ]}>
          <Text black text={item.message} />
        </View>
      </View>
    );
  };
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={{
        uri: 'https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg',
      }}>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={messages}
          renderItem={renderMessage}
          showsVerticalScrollIndicator={false}
          bounces={false}
        />
      </View>
    </ImageBackground>
  );
}
