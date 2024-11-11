import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState, useCallback, memo} from 'react';
import {moderateScale, scale, verticalScale} from '../../Custome/Responsive';
import CustomeHeader from '../../Custome/CustomeHeader';
import Color from '../../Component/Color';
import Font from '../../Component/Font';
import CustomInputField from '../../Custome/CustomeInputField';
import CustomeButton from '../../Custome/CustomeButton';
import {useNavigation} from '@react-navigation/native';
import {ScreenName} from '../../Component/Screen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPasswordPress = useCallback(() => {}, []);
  const handleSignInPress = useCallback(() => {
    navigation.navigate(ScreenName.otp);
  }, []);
  const handleFacebookLoginPress = useCallback(() => {}, []);
  const handlePhoneLoginPress = useCallback(() => {}, []);
  const handleRegisterPress = useCallback(() => {}, []);

  const renderHeader = useCallback(
    () => (
      <CustomeHeader
        backgroundColor={Color.transparent}
        title="Rocky"
        titleStyle={styles.headerTitle}
        leftArrow={true}
        goBack={false}
      />
    ),
    [],
  );

  const renderBody = useCallback(() => {
    return (
      <View>
        <CustomInputField
          label="Email/Phone number"
          placeholder="yourname@gmail.com"
          value={email}
          onChangeText={setEmail}
          iconLeft={true}
          leftIconImage={require('../../Assets/Img/email.png')}
          leftIconStyle={styles.leftIcon}
          labelWidth={scale(145)}
          inputContainerStyle={styles.inputContainer}
        />

        <CustomInputField
          label="Password"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          isPassword
          leftIconImage={require('../../Assets/Img/lock.png')}
          leftIconStyle={styles.leftIcon}
          labelWidth={scale(73)}
          inputContainerStyle={styles.inputContainer}
        />

        <Pressable onPress={handleForgotPasswordPress}>
          <Text style={styles.forgotPassword}>Forgot password ?</Text>
        </Pressable>

        <CustomeButton
          buttonColor={Color.theme1}
          buttonWidth="90%"
          buttonHeight={scale(50)}
          title="Sign in"
          borderRadius={scale(25)}
          fontSize={scale(15)}
          fontColor={Color.White}
          fontFamily={Font.semiBold}
          marginTop={verticalScale(12)}
          alignSelf={'center'}
          onPress={handleSignInPress}
        />

        <View style={styles.dividerContainer}>
          <Text style={styles.dividerText}>Or login with</Text>
        </View>

        <View style={styles.btnView}>
          <CustomeButton
            borderWidth={scale(0.5)}
            borderColor={Color.mediumGray}
            buttonWidth="45%"
            buttonHeight={scale(50)}
            title="Facebook"
            borderRadius={scale(25)}
            fontSize={scale(13)}
            fontColor={Color.Black}
            fontFamily={Font.semiBold}
            alignSelf={'center'}
            iconLeft={true}
            iconImage={require('../../Assets/Img/facebook.png')}
            iconImageStyle={styles.iconImage}
            onPress={handleFacebookLoginPress}
          />

          <CustomeButton
            borderWidth={scale(0.5)}
            borderColor={Color.mediumGray}
            buttonWidth="45%"
            buttonHeight={scale(50)}
            title="Phone No"
            borderRadius={scale(25)}
            fontSize={scale(13)}
            fontColor={Color.Black}
            fontFamily={Font.semiBold}
            alignSelf={'center'}
            iconLeft={true}
            iconImage={require('../../Assets/Img/phone.png')}
            iconImageStyle={styles.phoneIconImage}
            onPress={handlePhoneLoginPress}
          />
        </View>

        <View style={styles.signUpContainer}>
          <Text style={styles.infoText}>
            Don't have an account?{' '}
            <Text style={styles.signUpText} onPress={handleRegisterPress}>
              {' '}
              Register
            </Text>
          </Text>
        </View>
      </View>
    );
  }, [
    email,
    password,
    handleForgotPasswordPress,
    handleSignInPress,
    handleFacebookLoginPress,
    handlePhoneLoginPress,
    handleRegisterPress,
  ]);

  return (
    <ScrollView>
      <ImageBackground
        source={require('../../Assets/Img/Ellipse.png')}
        style={{height: verticalScale(250), width: '100%'}}>
        {renderHeader()}
        <View style={styles.headerContent}>
          <Text style={styles.title}>Sign in to your Account</Text>
          <Text style={styles.subtitle}>Let's sign in to your account</Text>
        </View>
      </ImageBackground>
      {renderBody()}
    </ScrollView>
  );
};

export default memo(LoginScreen);

const styles = StyleSheet.create({
  headerTitle: {
    right: scale(15),
    color: Color.White,
  },
  title: {
    fontSize: scale(36),
    paddingLeft: scale(15),
    fontFamily: Font.bold,
    marginTop: verticalScale(15),
    lineHeight: verticalScale(43),
    color: Color.White,
  },
  subtitle: {
    fontSize: scale(14),
    fontFamily: Font.medium,
    paddingLeft: scale(15),
    paddingTop: verticalScale(10),
    color: Color.White,
  },
  inputContainer: {
    marginHorizontal: scale(15),
    marginTop: verticalScale(25),
    borderRadius: scale(40),
    height: hp('7.5%'),
  },
  forgotPassword: {
    fontSize: scale(14),
    fontFamily: Font.bold,
    color: Color.theme1,
    paddingVertical: verticalScale(15),
    textAlign: 'right',
    marginRight: scale(20),
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(20),
    alignSelf: 'center',
  },
  infoText: {
    fontSize: moderateScale(14),
    color: Color.mediumGray,
    fontFamily: Font.medium,
    width: '90%',
    lineHeight: verticalScale(20),
    textAlign: 'center',
  },
  signUpText: {
    fontSize: scale(12),
    color: Color.theme1,
    fontFamily: Font.bold,
  },
  dividerContainer: {
    borderTopWidth: scale(1),
    borderTopColor: Color.LightGray,
    marginHorizontal: scale(25),
    marginVertical: scale(30),
    alignItems: 'center',
  },
  dividerText: {
    fontSize: scale(12),
    fontFamily: Font.semiBold,
    color: '#ACB5BB',
    marginTop: verticalScale(-10),
    backgroundColor: Color.White,
    width: scale(120),
    textAlign: 'center',
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(15),
    marginTop: verticalScale(-5),
  },
  iconImage: {
    width: scale(12),
    height: scale(12),
    marginRight: scale(7),
  },
  phoneIconImage: {
    width: scale(16),
    height: scale(16),
    marginRight: scale(7),
  },
  leftIcon: {
    width: scale(20),
    height: scale(20),
  },
});
