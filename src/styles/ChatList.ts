import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
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

export const stylesBubble = StyleSheet.create({
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
