import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationStrings from '../constants/NavigationStrings'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UfoneScreen, ZongScreen } from '../Screen';

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
            headerShown:false,
            tabBarLabel: ({ focused, }) => {

            }
        }}
        >
            <Stack.Screen name={NavigationStrings.UFONE_STACK} component={UfoneScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})