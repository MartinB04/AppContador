import React, { useState } from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';

export const ContadorScreen = () => {

const [contador, setContador] = useState(10)

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 25, top: -15}}>Contador: {contador}</Text>

    <TouchableOpacity style={{backgroundColor: "red", width: 200}}>
        <Text style={{fontSize: 20, textAlign: "center"}}>Presioname Bv !!!</Text>
    </TouchableOpacity>
    </View>
  );
};
