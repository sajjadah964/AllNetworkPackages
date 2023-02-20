import React, { useEffect, useState } from 'react';
// import Modal from "react-native-modal";
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { Image, View, StyleSheet, Text, BackHandler, Alert, Button, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import imagePath from '../constants/imagePath';
import Share from "react-native-share";
import Modal from "react-native-modal";
function CustomDrawer(props) {
    const { navigation } = props;
    const [ModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!ModalVisible);
    };
    const url = "http://sajjad.markupsoft.com/";
    const title = "All Network Packages";
    const message = "Get Call,SMS,and Internet package of any network(Jazz,Warid,Ufone,Telenor,Zong)";
    const options = {
        title,
        url,
        message,
    };
    const share = async (customOptions = options) => {
        try {
            await Share.open(customOptions);
        } catch (err) {
            console.log(err);
        }
    };
    const backAction = () => {
        BackHandler.exitApp()
    };

    return (
        <DrawerContentScrollView
            style={{
                backgroundColor: '#fff',
                flex: 1,
                flexDirection: 'column',
            }}
            {...props}
        >
            {/* Modal Start */}
            <Modal isVisible={ModalVisible}>
                <View style={{ justifyContent: 'center', backgroundColor: '#fff' }}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={{
                            fontSize: scale(18),
                            textAlign: 'left',
                            fontWeight: '600'
                        }}>About</Text>
                    </View>
                    <Text style={[styles.aboutTextStyle,
                    {
                        fontSize: scale(15),
                        marginBottom:moderateScale(20)
                    }]
                    }>All Network Packages</Text>
                    <Text style={styles.aboutTextStyle}>This App provides latest Call,SMS,Internet and other offer of all networks
                        available in Pakistan.
                    </Text>
                    <Text style={styles.aboutTextStyle}>All Packages are updated at the end of the each month </Text>
                    <Text style={styles.aboutTextStyle}>Helps by rating 5 Stars and also your valuable feedback,love and support. </Text>
                    <Text style={styles.aboutTextStyle}>Email:Sajjadah964@gmail.com</Text>

                    <TouchableOpacity
                        onPress={toggleModal}
                        style={{ color: '#8a0204' ,alignItems:'flex-end',marginRight:20,}}
                    >
                        <Text style={{fontSize:scale(18)}}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Modal End  */}

            <View style={styles.detailStyle}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        textTransform: 'uppercase'
                    }}
                    >
                        All Network Package</Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <Text style={styles.dataStyle}>Call </Text>
                    <Text style={styles.dataStyle}>Sms </Text>
                    <Text style={styles.dataStyle}>Internet</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image
                        style={{
                            width: moderateScale(50),
                            height: verticalScale(50),
                            backgroundColor: '#fff'
                        }}
                        source={imagePath.icUfonelogo}
                    />
                    <View style={styles.marginStyle}></View>
                    <Image
                        style={{
                            width: moderateScale(30),
                            height: verticalScale(30),
                            backgroundColor: '#fff',
                        }}
                        source={imagePath.icZonglogo}
                    />
                </View>
            </View>
            <View style={{ backgroundColor: '#fff', flex: 1 }}
            >
                <DrawerItem
                    label="Share This App"
                    onPress={async () => {
                        await share();
                    }}
                    icon={() => <Image
                        style={styles.iconStyle}
                        source={imagePath.icShare}
                    />}
                // activeBackgroundColor={'blue'}
                // inactiveBackgroundColor={'#00abc0'}
                // activeTintColor={'blue'}
                // inactiveTintColor={'blue'}
                />

                <DrawerItem
                    label="Rate App"
                    onPress={() => alert('Rate App')}
                    icon={() => <Image
                        style={styles.iconStyle}
                        source={imagePath.icRate}
                    />}

                />
                <DrawerItem
                    label="Privacy Policy"
                    onPress={() => alert('Rate App')}
                    icon={() => <Image
                        style={styles.iconStyle}
                        source={imagePath.icPrivacy}
                    />}
                />
                <DrawerItem
                    label="About"
                    // onPress={() => setModalVisible(true)}
                    onPress={() => toggleModal()}
                    icon={() => <Image
                        style={styles.iconStyle}
                        source={imagePath.icAbout}
                    />}
                />
                <DrawerItem
                    label="Exit"
                    onPress={() => { backAction() }}
                    icon={() => <Image
                        style={styles.iconStyle}
                        source={imagePath.icExit}
                    />}
                />
                {/* 
                <View style={{ flex: 1 }}>
                    <View
                        style={styles.menuStyle}
                    >
                        <Image
                            style={styles.iconStyle}
                            source={imagePath.icShare}
                        />
                        <View style={{ marginHorizontal: moderateScale(15) }}></View>
                        <Text>Share This App</Text>
                    </View>

                    <View
                        style={styles.menuStyle}
                    >
                        <Image
                            style={styles.iconStyle}
                            source={imagePath.icRate}
                        />
                        <View style={{ marginHorizontal: moderateScale(15) }}></View>
                        <Text>Rate App</Text>
                    </View>

                    <View
                        style={styles.menuStyle}
                    >
                        <Image
                            style={styles.iconStyle}
                            source={imagePath.icPrivacy}
                        />
                        <View style={{ marginHorizontal: moderateScale(15) }}></View>

                        <Text>Privacy Policy</Text>
                    </View>

                    <View
                        style={styles.menuStyle}
                    >
                        <Image
                            style={styles.iconStyle}
                            source={imagePath.icAbout}
                        />
                        <View style={{ marginHorizontal: moderateScale(15) }}></View>
                        <Text>About</Text>
                    </View>

                    <View
                        style={styles.menuStyle}
                    >
                        <Image
                            style={styles.iconStyle}
                            source={imagePath.icExit}
                        />
                        <View style={{ marginHorizontal: moderateScale(15) }}></View>
                        <Text>Exit</Text>
                    </View>

                </View> */}
            </View>

        </DrawerContentScrollView>
    );
}
export default CustomDrawer;
const styles = StyleSheet.create({
    iconStyle: {
        width: 30,
        height: 30,
    },
    menuStyle: {
        flexDirection: 'row',
        marginLeft: moderateVerticalScale(20),
        marginBottom: moderateVerticalScale(10),
    },
    dataStyle: {
        fontSize: scale(16),
        textTransform: 'uppercase',
        marginLeft: moderateVerticalScale(5),
        fontWeight: '600',
        color: '#8a0204'
    },
    sinName: {
        fontSize: scale(18),
        fontWeight: '700',
    },
    marginStyle: {
        marginHorizontal: moderateScale(10)
    },
    detailStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: '#8a0204'
    },
    aboutTextStyle: {
        fontSize: scale(14)
    }
})