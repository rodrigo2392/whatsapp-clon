import React, {useState} from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Loader from './Loader';
import Text from './Text';

interface ModalProps {
  visible: boolean;
  close: () => void;
}

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  loaderContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    flexDirection: 'row',
    width: width,
  },
  textContainer: {
    zIndex: 3,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    bottom: 0,
    width: width,
    minHeight: 100,
    height: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default function Story({visible, close}: ModalProps) {
  const [active, setActive] = useState(1);

  const stories = [
    {
      url: 'https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-109305/spider-man-into-the-spider-verse.jpg',
      text: 'Spiterman',
    },
    {
      url: 'https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-113547/Venom-Movie-Official-Poster-8k-Samsung-Galaxy-Note.jpg',
      text: 'Venenoso',
    },
    {
      url: 'https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-109421/goku-ultra-instinct.jpg',
      text: 'el kokun',
    },
    {
      url: 'https://r1.ilikewallpaper.net/iphone-11-pro-wallpapers/download-109733/stain-Boku-no-Hero-Academia-Fanpop.jpg',
    },
  ];
  return (
    <Modal onRequestClose={close} visible={visible}>
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          {stories.map((_el, index: number) => (
            <Loader
              key={index + 1}
              id={index + 1}
              active={active}
              width={
                (width * 0.95 - 10 * (stories.length - 1)) / stories.length
              }
              close={close}
              setActive={setActive}
              last={stories.length}
            />
          ))}
        </View>
        {stories.map(
          (el, index: number) =>
            el.text &&
            active === index + 1 && (
              <View style={styles.textContainer}>
                <Text text={el.text || ''} />
              </View>
            ),
        )}
        <View
          style={{
            width: width,
            flexDirection: 'row',
            height: height,
            zIndex: 4,
          }}>
          <TouchableOpacity
            style={{
              width: width / 2,
              height: height,
            }}
            onPress={() => {
              setActive(active - 1);
            }}
          />
          <TouchableOpacity
            style={{
              width: width / 2,
              height: height,
            }}
            onPress={() => {
              setActive(active + 1);
            }}
          />
        </View>

        {stories.map(
          (el, index: number) =>
            active === index + 1 && (
              <Image
                key={index + 1}
                style={styles.image}
                source={{
                  uri: el.url,
                }}
              />
            ),
        )}
      </View>
    </Modal>
  );
}
