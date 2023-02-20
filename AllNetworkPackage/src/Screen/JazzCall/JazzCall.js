import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-share';


const JazzCall = () => {
    const getUserData = async () => {
        const response = await fetch("http://localhost:8000/packages/jazz/call");
        const realData = response.json();
        console.warn(realData);
    }
    useEffect(() => {
        getUserData()
    }, [])
    // const getUserData = () => {
    //     fetch("http://192.168.100.31:8000/packages/jazz/call").then((result) => {
    //         result.json.then((resp) => {
    //             console.log(resp);
    //         })
    //     })
    // }

    return (
        <View>
            <Text>JazzCall</Text>
            <Button
            // onPress={() => getUserData()}
            />
        </View>
    )
};

export default JazzCall

const styles = StyleSheet.create({})