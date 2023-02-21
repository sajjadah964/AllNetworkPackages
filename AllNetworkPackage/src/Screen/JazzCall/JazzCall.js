import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import dummyData from './dummyData'

const JazzCall = () => {
    const getUserData = () => {
        fetch("http://192.168.10.14:8000/packages/jazz/call").then((result) => {
            result.json().then((resp) => {
                console.log(resp);
            })
        })
    }
    useEffect(() => {
        getUserData()
    }, [])

    // const renderItem = ({ item }) => {
    //     // console.log(item.pkgDetails[1])
    //     return (
    //         <View>
    //             <Text style={{
    //                 color: '#000',
    //                 fontSize: 20,
    //             }}>{item.pkgName}</Text>
    //             <Text style={{
    //                 color: '#000',
    //                 fontSize: 20,
    //             }}> Package Name:{item.pkgDetails[0].sms}</Text>
    //         </View>
    //     )
    // }

    return (
        <View style={styles.container}>
            <Text>Jazz Call</Text>
            {/* <FlatList
                data={dummyData}
                renderItem={renderItem}
            /> */}

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50'
    }
})
export default JazzCall;