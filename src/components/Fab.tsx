import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, position, onPress}: Props) => {
  return (<View style={[
    style.fabLocation,
    position === 'bl' ? style.fabLocationL : style.fabLocationR,
  ]}>
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple("red",true,30)}
      >
      <View style={style.fabButton}>
        <Text style={style.fabText}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
    </View>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  fabText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
});
