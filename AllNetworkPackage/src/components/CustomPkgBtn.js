import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';



const CustomPkgBtn = ({
    logoStyle,
    onPress,
    textStyle,
    singleStyle,
    iconStyle,
    simImage,
    btnText,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ ...styles.singleStyle, ...singleStyle }}
                onPress={onPress}
                activeOpacity={1}
            >
                <View style={{ ...styles.iconStyle, ...iconStyle }}>
                    <Image
                        style={{ ...styles.logoStyle, ...logoStyle }}
                        source={simImage}
                    />
                </View>
                <View style={{ ...styles.gapStyle }}></View>
                <Text style={{ ...styles.textStyle, ...textStyle }}>{btnText}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent:'center',
        alignItems: 'center',
    },
    singleStyle: {
        flexDirection: 'row',
        width: moderateScale(270),
        height: verticalScale(45),
        borderRadius: moderateScale(270 / 2),
        borderWidth: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginBottom: verticalScale(15)
    },
    logoStyle: {
        // width: moderateScale(25),
        // height: verticalScale(25),
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        borderWidth: 1,
        borderColor: '#a60006',
        width: moderateScale(40),
        height: verticalScale(40),
        borderRadius: moderateScale(40 / 2),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: moderateScale(5)
    },
    gapStyle: {
        marginHorizontal: moderateScale(10)
    },
    textStyle: {
        fontSize: scale(17),
        fontWeight: '600',
        color: '#fff',

    }
});
export default CustomPkgBtn;
