import React from 'react';
import NavigationStrings from '../constants/NavigationStrings';
import {
  Home,
  InitialScreen,
  JazzCall,
  JazzHome,
  ModalScreen,
  TelenorHome,
  UfoneHome,
  ZongHome,
} from '../Screen';
import MyTabs from './MyTabs';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={NavigationStrings.INITIAL_SCREEN}
        component={InitialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NavigationStrings.MY_TABS}
        component={MyTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen name={NavigationStrings.HOME} component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen name={NavigationStrings.JAZZ_HOME} component={JazzHome}
        options={{
          title: 'Jazz Offers',
          headerStyle: {
            backgroundColor: '#8a0204',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name={NavigationStrings.TELENOR_HOME}
        component={TelenorHome}
        options={{
          title: 'Telenor Offers',
          headerStyle: {
            backgroundColor: '#00a9e5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen name={NavigationStrings.ZONG_HOME} component={ZongHome}
        options={{
          title: 'Zong Offers',
          headerStyle: {
            backgroundColor: '#8ec740',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen name={NavigationStrings.UFONE_HOME} component={UfoneHome}
        options={{
          title: 'Ufone Offers',
          headerStyle: {
            backgroundColor: '#ff6501',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen name={NavigationStrings.JAZZ_CALL} component={JazzCall}
        options={{
          title: 'Jazz call',
          headerStyle: {
            backgroundColor: '#8a0204',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </>
  );
}
