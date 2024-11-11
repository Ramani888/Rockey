import React from 'react';
import {View, TextInput, Text, StyleSheet, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {scale, verticalScale} from '../Custome/Responsive';
import Color from '../Component/Color';

const CustomInputField = ({
  inputContainerStyle,
  label,
  labelWidth,
  placeholder,
  value,
  onChangeText,
  leftIconImage,
  leftIconStyle,
  isPassword,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={[styles.inputContainer, inputContainerStyle]}>
      <Text style={[styles.label, {width: labelWidth}]}>{label}</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: verticalScale(4.5),
          alignItems: 'center',
        }}>
        {leftIconImage && (
          <Image
            source={leftIconImage}
            style={[styles.leftIcon, leftIconStyle]}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={Color.LightGray}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !showPassword}
          //   selectionColor={Color.Black}
        />
        {isPassword && (
          <Feather
            name={showPassword ? 'eye' : 'eye-off'}
            size={20}
            color={Color.Black}
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: scale(15),
    marginTop: verticalScale(15),
    borderColor: Color.Gray,
    borderWidth: 1,
  },
  label: {
    position: 'absolute',
    color: '#ACB5BB',
    marginLeft: scale(30),
    marginTop: verticalScale(-10),
    zIndex: 1,
    backgroundColor: Color.White,
    paddingLeft: scale(5),
    width: scale(145),
  },
  input: {
    backgroundColor: Color.White,
    color: Color.Black,
    fontSize: scale(14),
    borderRadius: scale(10),
    marginLeft: scale(5),
    marginRight: scale(35),
    paddingLeft: scale(10),
    width: '77%',
  },
  leftIcon: {
    marginLeft: scale(20),
    width: scale(20),
    height: scale(20),
  },
  eyeIcon: {
    position: 'absolute',
    right: scale(10),
  },
});

export default CustomInputField;
