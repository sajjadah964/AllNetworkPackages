import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';
import imagePath from '../../constants/imagePath';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NavigationStrings.MY_TABS);
    }, 3000);
  }, []);

  return (
    <View style={{ flex: 1, }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}
      >
        <Image
          style={{
            width: moderateScale(300),
            height: verticalScale(285),
          }}
          source={imagePath.bgImage}
        />
        <View style={{
          alignItems:'center',
        }}>
          <Text style={{fontSize:scale(30),fontWeight:'600',color:'#8a0204'}}> All Network Package</Text>
          <Text style={{fontSize:scale(18),color:'#8a0204'}}> All Latest Package Included</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});
export default SplashScreen;
