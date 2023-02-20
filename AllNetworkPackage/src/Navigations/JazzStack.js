import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import NavigationStrings from '../constants/NavigationStrings'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { JazzScreen } from '../Screen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                presentation: 'modal',
                // headerShown: true,
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                // tabBarShowLabel :false,
                // tabBarShowLabel: false,
                headerShown: false,
                tabBarLabel: ({ focused, }) => {

                }
            }}
        >
            <Stack.Screen name={NavigationStrings.JAZZ_STACK} component={JazzScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})