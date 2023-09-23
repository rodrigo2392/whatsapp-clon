import React from 'react';
import {View, SafeAreaView} from 'react-native';
import ChatHeader from '../components/ChatHeader';
import ChatList from '../components/ChatList';
import InputMessage from '../components/InputMessage';

export default function MessageScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const {message} = route?.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{position: 'relative'}}>
        <ChatHeader
          name={message?.name}
          image={message?.image}
          navigation={navigation}
        />
        <ChatList />
        <InputMessage />
      </View>
    </SafeAreaView>
  );
}
