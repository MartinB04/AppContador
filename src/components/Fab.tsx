import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, position, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        (position === 'bl')? [style.fabLocation, style.fabLocationL]:
        [style.fabLocation, style.fabLocationR]
      }>
      <View style={style.fabButton}>
        <Text style={style.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 10,
  },
  fabLocationR: {
    right: 15,
  },
  fabLocationL: {
    left: 15,
  },
  fabButton: {
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
  },

  fabText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
});
