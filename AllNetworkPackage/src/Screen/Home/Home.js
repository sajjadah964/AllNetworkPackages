import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NavigationStrings from '../../constants/NavigationStrings';
import imagePath from '../../constants/imagePath';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import CustomPkgBtn from '../../components/CustomPkgBtn';
const Home = ({ navigation }) => {

    const moveToScreen = screen => {
        navigation.navigate(screen);
        console.log('screen',screen)
    };
    const pkgName = 'All Network Package';
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerStyle}>
                <TouchableOpacity style={styles.MenubarStyle}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Image
                        source={imagePath.icMenubar}
                        style={{ width: 24, height: 24, tintColor: '#fff' }}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTextStyle}>{pkgName}</Text>
            </View>

            <View style={{
                height: verticalScale(100),
                backgroundColor: '#a60006',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    color: '#fff',
                    fontSize: scale(34),
                    textTransform: 'uppercase',
                    fontWeight: '500'
                }}>
                    All Sim Network
                </Text>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: scale(26),
                        textTransform: 'uppercase',
                    }}
                >Packages 2023</Text>

            </View>

            <View>
                <Image
                    source={imagePath.icSimname}
                    style={{
                        height: verticalScale(48),
                        width: '100%'
                    }}
                />
            </View>

            <View style={{ flex: 1, backgroundColor: '#740707', justifyContent: 'center', }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', }}>

                <CustomPkgBtn
                btnText={'Telenor'}
                textStyle={{...styles.textStyle,color:'#00a9e5'}}
                simImage={imagePath.icTelenorlogo}
                logoStyle={styles.logoStyle}
                singleStyle={styles.singleStyle}
                iconStyle={styles.iconStyle}
                onPress={() => {
                    moveToScreen(NavigationStrings.TELENOR_HOME);
                }}
            />
            <CustomPkgBtn
                btnText={'Jazz '}
                textStyle={{...styles.textStyle,color:'#8a0204'}}
                simImage={imagePath.icJazzlogo}
                logoStyle={styles.logoStyle}
                singleStyle={styles.singleStyle}
                iconStyle={styles.iconStyle}
                onPress={() => {
                    moveToScreen(NavigationStrings.JAZZ_HOME);
                }}
            />
            <CustomPkgBtn
                btnText={'Ufone'}
                textStyle={{...styles.textStyle,color:'#ff6501'}}
                simImage={imagePath.icUfonelogo}
                logoStyle={styles.logoStyle}
                singleStyle={styles.singleStyle}
                iconStyle={styles.iconStyle}
                onPress={() => {
                    moveToScreen(NavigationStrings.UFONE_HOME);
                }}

            />
            <CustomPkgBtn
                btnText={'Zong'}
                textStyle={{...styles.textStyle,color:'#8ec740'}}
                simImage={imagePath.icZonglogo}
                logoStyle={styles.logoStyle}
                singleStyle={styles.singleStyle}
                iconStyle={styles.iconStyle}
                onPress={() => {
                    moveToScreen(NavigationStrings.ZONG_HOME);
                }}
            />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        height: 48,
        backgroundColor: '#abcabc',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#a60006'
    },
    MenubarStyle: {
        marginRight: 30
    },
    headerTextStyle: {
        fontSize: scale(17),
        color: '#fff',
        fontWeight: '600'
    },
    logoStyle: {
        width: moderateScale(30),
        height: verticalScale(30),
    },
    iconStyle: {
        borderWidth: 1,
        borderColor: '#a60006',
        width: moderateScale(50),
        height: verticalScale(50),
        borderRadius: moderateScale(50 / 2),
    },
    singleStyle: {
        width: moderateScale(270),
        height: verticalScale(60),
        borderRadius: moderateScale(270 / 2),
    },
    textStyle :{
        color:'#000',
        fontSize:23
    }
});
export default Home;
