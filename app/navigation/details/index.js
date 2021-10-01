import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen} from '../../screens';
const DetailsStack = createStackNavigator();

const Details = () => {
  return (
    <DetailsStack.Navigator>
      <DetailsStack.Screen
        name="Details"
        component={DetailsScreen}
      />
    </DetailsStack.Navigator>
  );
};
export default Details;
