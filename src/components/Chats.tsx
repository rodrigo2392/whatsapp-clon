import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ChatList from '../constants/chats';
import Text from './Text';
import ProfileImage from './ProfileImage';

interface MessageItem {
  id: number;
  name: string;
  lastMessage: string;
  image: string;
  date: Date;
  unread: number;
}

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  },
  lastMessageContainer: {
    flexDirection: 'row',
    borderBottomColor: '#e4e9ea',
    borderBottomWidth: 1,
    width: width * 0.7,
    paddingBottom: 10,
    paddingTop: 5,
    justifyContent: 'space-between',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageContainer: {
    padding: 15,
  },
  dateContainer: {
    width: width * 0.3,
    alignItems: 'flex-end',
  },
  unreadContainer: {
    width: width * 0.06,
    height: width * 0.06,
    alignItems: 'center',
    backgroundColor: '#00d55b',
    justifyContent: 'center',
    borderRadius: width * 0.05,
  },
});

const convertDate = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const UserItem = ({
  name,
  lastMessage,
  image,
  date,
  unread,
  id,
}: MessageItem) => {
  const navigation = useNavigation() as any;

  const goToChat = () => {
    navigation.push('Message', {message: {name, image}});
  };
  return (
    <TouchableOpacity
      onPress={() => goToChat()}
      key={id}
      style={styles.itemContainer}>
      <ProfileImage image={image} />
      <View style={styles.messageContainer}>
        <View style={styles.nameContainer}>
          <Text black text={name} />
          <View style={styles.dateContainer}>
            <Text
              size={15}
              color={unread ? '#00d55b' : '#A5A5A5'}
              text={convertDate(date)}
            />
          </View>
        </View>
        <View style={styles.lastMessageContainer}>
          <Text
            bold={unread > 0}
            size={17}
            color="#A5A5A5"
            text={lastMessage}
          />
          {unread > 0 && (
            <View style={styles.unreadContainer}>
              <Text size={15} text={unread.toString()} />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Chat() {
  return (
    <View>
      {ChatList.map(msg => (
        <UserItem
          key={msg.id}
          id={msg.id}
          name={msg.name}
          image={msg.image}
          date={msg.date}
          lastMessage={msg.lastMessage}
          unread={msg.unread}
        />
      ))}
    </View>
  );
}
