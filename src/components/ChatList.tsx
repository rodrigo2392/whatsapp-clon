import React from 'react';
import {View, ImageBackground, FlatList} from 'react-native';
import {messages} from '../constants/chats';
import Text from './Text';
import {styles, stylesBubble} from '../styles/ChatList';

export default function ChatList() {
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
