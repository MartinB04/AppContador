import React, {useState} from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={style.container}>
      <Text style={style.title}>Contador: {contador}</Text>

      <Fab title="-1" onPress={() => setContador(contador - 1) } position='bl' />
      <Fab title="+1" onPress={() => setContador(contador + 1) } position='br' />
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
});
