import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import dummyData from './dummyData'

const JazzCall = () => {
    const [data, setData] = useState([]);
    const getUserData = () => {
        fetch("http://192.168.0.108:8000/packages/jazz/call").then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                setData(resp);
            })
        })
    }
    useEffect(() => {
        getUserData()
    }, [])

    const renderItem = ({ item }) => {
        console.log(item)
        return (
            <View >

                <View>
                    <View>
                        <View><Text>{item.pkgName}</Text></View>
                        <View>
                            <Text>validity:{item.validity}</Text>
                            <Text>Rs:{item.price}</Text>
                        </View>
                    </View>
                    <View></View>
                </View>

                <View>
                    <View>
                        <Image />
                        <Text>{item.pkgDetails.onnetMint}</Text>
                        <Text>onnetMint</Text>
                    </View>
                </View>
                <View>
                    <Text>Activation Code :{item.acivationCode}</Text>
                </View>

                <View>
                    <TouchableOpacity
                        // onPress={onPress}
                        activeOpacity={0.8}
                    >
                        <Text>Subscribe</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text>Jazz Call</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
            />

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