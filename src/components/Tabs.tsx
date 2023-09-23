import React, {useContext} from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TabContext} from '../context/TabsContext';
import Text from './Text';
import {TabProp} from '../types';
import mytabs from '../constants/tabs';

const Tab = ({title, active, type, setActive}: TabProp) => {
  const tabStyles = StyleSheet.create({
    container: {
      padding: 15,
      borderBottomWidth: active ? 3 : 0,
      borderBottomColor: '#FFF',
    },
  });
  return (
    <TouchableOpacity onPress={() => setActive(type)}>
      <View style={tabStyles.container}>
        <Text text={title} bold={active} />
      </View>
    </TouchableOpacity>
  );
};
const {width} = Dimensions.get('screen');

export default function Tabs() {
  const {selectedType, setSelectedType} = useContext(TabContext);

  const styles = StyleSheet.create({
    main: {
      flexDirection: 'row',
      backgroundColor: '#085e55',
    },
    container: {
      flexDirection: 'row',
      backgroundColor: '#085e55',
      paddingHorizontal: 20,
      justifyContent: 'space-between',
      width: width * 0.9,
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 20,
    },
  });
  return (
    <View style={styles.main}>
      <View style={styles.iconContainer}>
        <Icon name="camera" size={20} color="#FFF" />
      </View>
      <View style={styles.container}>
        {mytabs.map(t => (
          <Tab
            type={t.type}
            key={t.type}
            title={t.title}
            active={selectedType === t.type}
            setActive={setSelectedType}
          />
        ))}
      </View>
    </View>
  );
}
