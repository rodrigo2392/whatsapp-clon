import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../components/Text';
import UserItem from '../components/UserItem';
import calls from '../constants/calls';
import Call from '../components/Call';

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  titleContainer: {
    paddingLeft: 20,
  },
});

export default function Status() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      {visible && <Call visible={visible} close={() => setVisible(false)} />}
      <View style={styles.titleContainer}>
        <Text bold color="#727171" text="Recientes" />
      </View>
      {calls.map(call => (
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={styles.container}>
          <UserItem
            key={call.user_id}
            name={call.user_name}
            description={call.date.toLocaleDateString()}
            image={call.user_image}
            missing={call.missing}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
