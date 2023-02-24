import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, Linking, Alert } from 'react-native';

import Loader from '../../components/Loader';
import imagePath from '../../constants/imagePath';
import styles from './styles';

const JazzInternet = ({
    // isLoading,
}) => {

    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    // const [inputValue, setinputValue] = useState('3420049141');
    const getUserData = () => {
        setisLoading(true)
        fetch("http://192.168.43.40:8000/packages/jazz/internet").then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                setData(resp);
                setisLoading(false)
            })
        })
    }
    useEffect(() => {
        getUserData()
    }, [])

    const triggerCall = (item) => {
        // console.log(item.activationCode)
        const pkgNumber = (item.activationCode)
        // console.log("this is the data",phoneNumber);
        Alert.alert('Confirmation...!', 'Would you like to Subscribe this offer.', [
            {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Yes', onPress: () => Linking.openURL(`tel:${pkgNumber}1234`) },
        ]);

    }

    const renderItem = ({ item }) => {
        console.log(item)
        return (
            <View style={{ flex: 1, backgroundColor: '#8a0204', paddingHorizontal: 10, paddingVertical: 5 }}>
                <View style={{ padding: 8, borderRadius: 12, backgroundColor: '#fff' }}>

                    <View style={[styles.gridStyle, { marginBottom: 6 }]}>
                        <View style={{ flex: 1 }}>
                            <View><Text style={styles.pkgNameStyle}>{item.pkgName}</Text></View>
                            <View style={[styles.gridStyle, { justifyContent: 'space-between' }]} >
                                <Text style={styles.validityStyle}>validity: <Text style={{ color: 'red' }}>{item.validity}</Text></Text>
                                <Text style={styles.priceStyle}>Rs: {item.price}</Text>
                            </View>
                        </View>
                        <View>
                            <Text>Image</Text>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.activeStyle}>Activation Code : <Text style={{
                            color: 'red', fontWeight: '500',
                            fontSize: 15,
                        }}>{item.activationCode}</Text></Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                        <View style={{
                            flex: 1,
                        }}>
                            <View style={styles.imgCenter}>
                                <Image
                                    style={styles.pkgImageStyle}
                                    source={imagePath.icMint}
                                />
                            </View>
                            <Text style={styles.pkgDetailsStyle}>{item.pkgDetails.onnetMint}</Text>
                            <Text style={styles.pkgName}>onNetMint</Text>
                        </View>

                        <View style={{ flex: 1 }}>
                            <View style={styles.imgCenter}>
                                <Image
                                    style={styles.pkgImageStyle}
                                    source={imagePath.icMint}
                                />
                            </View>
                            <Text style={styles.pkgDetailsStyle}>{item.pkgDetails.offnetMint}</Text>
                            <Text style={styles.pkgName}>offNetMint</Text>
                        </View>

                        <View style={{ flex: 1 }}>
                            <View style={styles.imgCenter}>
                                <Image
                                    style={styles.pkgImageStyle}
                                    source={imagePath.icSMS}
                                />
                            </View>
                            <Text style={styles.pkgDetailsStyle}>{item.pkgDetails.sms}</Text>
                            <Text style={styles.pkgName}>SMS</Text>
                        </View>

                        <View style={{ flex: 1 }}>
                            <View style={styles.imgCenter}>
                                <Image
                                    style={styles.pkgImageStyle}
                                    source={imagePath.icMB}
                                />
                            </View>
                            <Text style={styles.pkgDetailsStyle}>{item.pkgDetails.internet}</Text>
                            <Text style={styles.pkgName}>MBs</Text>
                        </View>

                    </View>

                    <View
                        style={{ alignItems: 'center' }}
                    >
                        <TouchableOpacity
                            onPress={() => triggerCall(item)}
                            activeOpacity={0.8}
                            style={styles.subscribeBtn}
                        >
                            <Text style={styles.btnTextStyle}>Subscribe</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Loader isLoading={isLoading} />
            <FlatList
                data={data}
                renderItem={renderItem}
                // keyExtractor={item => item.id}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    )
};


export default JazzInternet;