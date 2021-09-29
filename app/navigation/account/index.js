import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AccountScreen} from '../../screens';
const AccountStack = createStackNavigator();

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{headerShown: false}}
      />
    </AccountStack.Navigator>
  );
};
export default AccountStackScreen;
