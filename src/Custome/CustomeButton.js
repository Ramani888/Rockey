import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

const CustomeButton = ({
  title,
  buttonWidth,
  buttonHeight,
  buttonColor,
  fontSize,
  fontColor,
  onPress,
  fontFamily,
  fontWeight,
  disabled,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginHorizontal,
  paddingHorizontal,
  marginVertical,
  paddingVertical,
  padding,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  borderRadius,
  borderWidth,
  borderColor,
  iconLeft,
  iconImage,
  iconImageStyle,
  elevation,
  alignSelf,
  position,
  top,
  bottom,
  left,
  right,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.btnStyle,
        {
          backgroundColor: buttonColor,
          width: buttonWidth,
          height: buttonHeight ? buttonHeight : height * 0.06,
          borderRadius: borderRadius,
          borderTopLeftRadius: borderTopLeftRadius,
          borderTopRightRadius: borderTopRightRadius,
          borderBottomRightRadius: borderBottomRightRadius,
          borderBottomLeftRadius: borderBottomLeftRadius,
          borderWidth: borderWidth,
          borderColor: borderColor,
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginHorizontal: marginHorizontal,
          paddingHorizontal: paddingHorizontal,
          marginVertical: marginVertical,
          paddingVertical: paddingVertical,
          padding: padding,
          elevation: elevation,
          alignSelf: alignSelf,
          position: position,
          top: top,
          bottom: bottom,
          left: left,
          right: right,
        },
      ]}>
      {iconLeft && (
        <Image
          source={iconImage}
          style={[styles.imageIcon, iconImageStyle]}
        />
      )}
      <Text
        style={[
          styles.btnText,
          {
            fontSize: fontSize,
            color: fontColor,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
          },
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomeButton;

const styles = StyleSheet.create({
  btnStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
  },
});
