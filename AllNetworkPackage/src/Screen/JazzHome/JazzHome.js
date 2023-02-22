import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react';
import CustomPkgBtn from '../../components/CustomPkgBtn';
import imagePath from '../../constants/imagePath';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import CustomModal from '../../constants/CustomModal';
import NavigationStrings from '../../constants/NavigationStrings';


const JazzHome = ({ navigation }) => {
    const moveToScreen = screen => {
        navigation.navigate(screen);
        console.log('screen', screen)
    };
    return (
        <View style={styles.container}>
            <CustomPkgBtn
                btnText={'Call Offers'}
                simImage={imagePath.icPhone}
                logoStyle={styles.logoStyle}
                singleStyle={styles.singleStyle}
                iconStyle={styles.iconStyle}
                onPress={() => {
                    moveToScreen(NavigationStrings.JAZZ_CALL);
                }}
            />
            <CustomPkgBtn
                btnText={'SMS Offers'}
                simImage={imagePath.icMessage}
                logoStyle={styles.logoStyle}
                singleStyle={styles.singleStyle}
                iconStyle={styles.iconStyle}

            />
            <CustomPkgBtn
                btnText={'Internet Offers'}
                simImage={imagePath.icInternet}
                logoStyle={styles.logoStyle}
                singleStyle={styles.singleStyle}
                iconStyle={styles.iconStyle}
                onPress={() => {
                    moveToScreen(NavigationStrings.JAZZ_INTERNET);
                }}

            />
            <CustomPkgBtn
                btnText={'Location Based Offers'}
                simImage={imagePath.icLocation}
                logoStyle={styles.logoStyle}
                singleStyle={styles.singleStyle}
                iconStyle={styles.iconStyle}

            />
            {/* <CustomPkgBtn
                btnText={'Other Offers'}
                simImage={imagePath.icOtherOffer}
                logoStyle={styles.logoStyle}
                singleStyle={styles.singleStyle}
                iconStyle={styles.iconStyle}

            /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    logoStyle: {
        tintColor: '#8a0204',
    },
    singleStyle: {
        backgroundColor: '#8a0204',
        borderWidth: 0
    },
    iconStyle: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        marginLeft: moderateScale(3)
    }
});
export default JazzHome;