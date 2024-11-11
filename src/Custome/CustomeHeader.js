import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../Component/Color';
import Font from '../Component/Font';
import {scale, verticalScale} from './Responsive';
import {useNavigation} from '@react-navigation/native';

const CustomeHeader = ({
  headerContainerStyle = {},
  backgroundColor = Color.Primary,
  title = '',
  titleStyle = {},
  threeDotIcon = false,
  leftArrow = false,
  goBack = false,
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.headerContainer, headerContainerStyle, {backgroundColor}]}>
      {leftArrow && (
        <Pressable
          onPress={() => goBack && navigation.goBack()}
          style={styles.leftArrow}>
          <AntDesign
            name="left"
            size={scale(20)}
            color={Color.White}
            style={''}
          />
        </Pressable>
      )}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {threeDotIcon && (
        <Image
          source={require('../Assets/Img/threeDots.png')}
          style={styles.threeDotIcon}
        />
      )}
    </View>
  );
};

export default CustomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: verticalScale(70),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    position: 'absolute',
    color: Color.Black,
    fontFamily: Font.bold,
    fontSize: scale(20),
    textAlign: 'center',
    flex: 1,
  },
  leftArrow: {
    position: 'absolute',
    left: scale(15),
  },
  threeDotIcon: {
    position: 'absolute',
    right: scale(15),
    width: scale(24),
    height: scale(24),
    resizeMode: 'contain',
  },
});
