import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Text from '../components/Text';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserItem from '../components/UserItem';
import Story from '../components/Story';

export default function Status() {
  const [open, setOpen] = useState(false);
  return (
    <View>
      {open && <Story visible={open} close={() => setOpen(false)} />}

      <View style={{flexDirection: 'row', padding: 20}}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/23.jpg'}}
          style={{width: 60, height: 60, borderRadius: 30}}
        />
        <View style={{paddingLeft: 20}}>
          <Text black text="Mi estado" />
          <Text size={16} color="#727171" text="Añade una actualización" />
        </View>
        <View
          style={{
            backgroundColor: '#0A7167',
            width: 25,
            height: 25,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 20,
            left: 60,
            borderColor: '#FFF',
            borderWidth: 1,
          }}>
          <Icon name="plus" color="#FFF" size={15} />
        </View>
      </View>
      <View style={{paddingLeft: 20}}>
        <Text bold color="#727171" text="Recientes" />
      </View>
      {
        <UserItem
          image="https://randomuser.me/api/portraits/men/62.jpg"
          description="hace 19 minutos"
          name="Leonardo"
          withBorder
        />
      }
      <View style={{paddingLeft: 20}}>
        <Text bold color="#727171" text="Vistos" />
      </View>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <UserItem
          image="https://randomuser.me/api/portraits/men/44.jpg"
          description="Hoy 13:20"
          name="Tony"
        />
      </TouchableOpacity>
    </View>
  );
}
