import React, {useState} from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={style.container}>
      <Text style={style.title}>Contador: {contador}</Text>

      <TouchableOpacity
        onPress={() => setContador(contador - 1)}
        style={[style.fabLocation, style.fabLocationL]}>
        <View style={style.fabButton}>
          <Text style={style.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setContador(contador + 1)}
        style={[style.fabLocation, style.fabLocationR]}>
        <View style={style.fabButton}>
          <Text style={style.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    top: -15,
  },
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
