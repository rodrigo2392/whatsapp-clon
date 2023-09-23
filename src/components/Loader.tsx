import React, {useEffect, useMemo, useCallback} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

const STORY_TIME = 3000;

export default function Loader({
  id,
  width,
  close,
  active,
  setActive,
  last,
}: {
  id: number;
  width: number;
  close: () => void;
  active: number;
  setActive: (id: number) => void;
  last: number;
}) {
  const counter = useMemo(() => new Animated.Value(0), []);

  const goNext = useCallback(() => {
    if (active === last) {
      close();
    } else {
      setActive(id + 1);
    }
  }, [active, close, id, last, setActive]);

  useEffect(() => {
    if (active > id) {
      Animated.timing(counter, {
        toValue: width,
        duration: 50,
        useNativeDriver: false,
      }).start();
    }

    if (active < id) {
      Animated.timing(counter, {
        toValue: new Animated.Value(0),
        duration: 50,
        useNativeDriver: false,
      }).start();
    }
  }, [active, counter, id, width]);

  useEffect(() => {
    if (id === active) {
      Animated.timing(counter, {
        toValue: width,
        duration: STORY_TIME,
        useNativeDriver: false,
      }).start(goNext);
    }
  }, [active, counter, goNext, id, width]);

  const styles = StyleSheet.create({
    progressBar: {
      height: 3,
      width: width,
      backgroundColor: '#B2B2B2',
      zIndex: 2,
    },
    active: {
      width: counter,
      backgroundColor: '#ffffff',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  });

  return (
    <View style={{marginRight: 10}}>
      <View style={styles.progressBar} />
      <Animated.View style={[styles.progressBar, styles.active]} />
    </View>
  );
}
