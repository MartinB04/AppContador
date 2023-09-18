import React, {useState} from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={style.container}>
      <Text style={style.title}>Contador: {contador}</Text>

      <TouchableOpacity style={{backgroundColor: 'red', width: 200}}>
        <Text style={style.button}>
          Presioname Bv !!!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center'},
title: {textAlign: 'center', fontSize: 25, top: -15},
button: {
    fontSize: 20, textAlign: 'center'
}

});
