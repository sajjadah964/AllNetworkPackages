import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomPkgBtn from '../../components/CustomPkgBtn';
import imagePath from '../../constants/imagePath';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const UfoneHome = () => {
  return (
    <View style={styles.container}>
      <CustomPkgBtn
        btnText={'Call Offers'}
        simImage={imagePath.icPhone}
        logoStyle={styles.logoStyle}
        singleStyle={styles.singleStyle}
        iconStyle={styles.iconStyle}
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
    tintColor: '#ff6501',
  },
  singleStyle: {
    backgroundColor: '#ff6501',
    borderWidth: 0
  },
  iconStyle: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    marginLeft: moderateScale(3)
  }
});
export default UfoneHome;