import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationStrings from '../constants/NavigationStrings';
import { Home, JazzHome, } from '../Screen';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();
const MyTabs = () => {
  return (
    <Drawer.Navigator
      initialRouteName={NavigationStrings.HOME}
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name={NavigationStrings.HOME}
        component={Home}
        title="Home"
        options={{ title: 'My home' }}
        screenOptions={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default MyTabs;
