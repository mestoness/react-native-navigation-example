import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {style} from './styles';

const Card = function ({item}) {

  return (
    <View style={style.card}>
      <TouchableOpacity
        onPress={() => {
        }}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Card;
