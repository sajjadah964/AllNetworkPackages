import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationStrings from '../constants/NavigationStrings';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function Routes() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName={NavigationStrings.HOME}>
                <Drawer.Screen name={NavigationStrings.HOME} component={Home} />
                <Drawer.Screen name={NavigationStrings.INITIAL_SCREEN} component={InitialScreen} />
            </Drawer.Navigator> */}

      <Stack.Navigator
        // screenOptions={{ presentation: 'modal', headerShown: true }}
      >
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
