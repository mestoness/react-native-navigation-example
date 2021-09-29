import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {style} from './styles';
import {useNavigation} from '@react-navigation/native';

const Card = ({item,index}) => {
  const navigation = useNavigation();
  return (
    <View style={style.card}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            id: item.id,
          });
        }}>
        <Text style={style.cartTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Card;
