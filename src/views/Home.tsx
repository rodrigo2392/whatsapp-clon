import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Chats from '../components/Chats';
import {TabContext} from '../context/TabsContext';
import Status from './Status';
import Calls from './Calls';

export default function HomeScreen() {
  const {selectedType} = useContext(TabContext);

  const renderTab = () => {
    switch (selectedType) {
      case 'CHAT':
        return <Chats />;
      case 'STATUS':
        return <Status />;
      case 'CALL':
        return <Calls />;
      default:
        return <Chats />;
    }
  };
  return (
    <ScrollView>
      <View>
        <Header />
        <Tabs />
        {renderTab()}
      </View>
    </ScrollView>
  );
}
