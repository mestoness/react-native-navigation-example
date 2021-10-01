import HomeStack from './home';
import DetailsStack from './details';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const MainStack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="DetailsStack"
          component={DetailsStack}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
