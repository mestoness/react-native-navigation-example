import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, DetailsScreen} from '../../screens';
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
