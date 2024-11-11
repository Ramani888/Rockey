import React, {useState, useCallback, memo, useEffect} from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {scale, verticalScale} from '../../Custome/Responsive';
import CustomeHeader from '../../Custome/CustomeHeader';
import Color from '../../Component/Color';
import Font from '../../Component/Font';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {ScreenName} from '../../Component/Screen';
import OTPTextInput from 'react-native-otp-textinput';
import CustomeButton from '../../Custome/CustomeButton';
import showMessageonTheScreen from '../../Component/ShowMessageOnTheScreen';

const OTPScreen = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [isValid, setIsValid] = useState(true);
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let timer;
    if (isCounting) {
      timer = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown <= 1) {
            clearInterval(timer);
            setIsCounting(false);
            return 60;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isCounting]);

  useEffect(() => {
    setIsCounting(true);
  }, [isFocused]);

  const handleSignInPress = useCallback(() => {
    navigation.navigate(ScreenName.otp);
  }, [navigation]);

  const handleOtpChange = useCallback(text => {
    setOtp(text);
    setIsValid(text.length === 6 && /^\d+$/.test(text));
  }, []);

  const handleSubmit = useCallback(() => {
    if (isValid && otp.length === 6) {
      navigation.navigate(ScreenName.setting)
      // verifyOTP();
    } else {
      showMessageonTheScreen('Invalid OTP, please check your input.');
    }
  }, [isValid, otp]);

  const renderHeader = useCallback(
    () => (
      <CustomeHeader
        backgroundColor={Color.transparent}
        title="Rocky"
        titleStyle={styles.headerTitle}
        leftArrow={true}
        goBack={true}
      />
    ),
    [],
  );

  const renderBody = useCallback(
    () => (
      <View style={styles.bodyContainer}>
        <Text style={styles.enterOtpText}>Enter OTP</Text>
        <Text style={styles.otpDescriptionText}>
          A 6-digit code has been sent to yourname@gmail.com
        </Text>
        <OTPTextInput
          handleTextChange={handleOtpChange}
          inputCount={6}
          containerStyle={styles.otpContainer}
          textInputStyle={styles.otpInput}
          tintColor={isValid ? Color.Black : Color.Green}
          offTintColor={Color.mediumGray}
        />
        <Pressable
          style={styles.resendOtpView}
          onPress={() => setIsCounting(true)}
          disabled={isCounting}>
          <Text
            style={[
              styles.resendOtpText,
              {color: isCounting ? Color.mediumGray : Color.Green},
            ]}>
            {isCounting ? `Resend OTP in ${countdown}s` : 'Resend OTP'}
          </Text>
        </Pressable>
        <CustomeButton
          buttonColor={otp.length === 6 ? Color.theme1 : Color.Gray}
          buttonWidth="100%"
          buttonHeight={scale(50)}
          title="Verify OTP"
          borderRadius={scale(25)}
          fontSize={scale(15)}
          fontColor={Color.White}
          fontFamily={Font.semiBold}
          marginTop={verticalScale(12)}
          alignSelf="center"
          onPress={handleSubmit}
        />
      </View>
    ),
    [otp, isValid, isCounting, countdown, handleOtpChange, handleSubmit],
  );

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../Assets/Img/Ellipse.png')}
        style={styles.headerBackground}>
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

export default memo(OTPScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBackground: {
    height: verticalScale(250),
    width: '100%',
  },
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
  bodyContainer: {
    flex: 1,
    marginTop: verticalScale(10),
    marginHorizontal: scale(20),
  },
  enterOtpText: {
    fontSize: scale(20),
    color: Color.Black,
    fontFamily: Font.bold,
    marginTop: verticalScale(35),
  },
  otpDescriptionText: {
    fontSize: scale(14),
    color: Color.mediumGray,
    fontFamily: Font.medium,
    marginTop: verticalScale(10),
  },
  otpContainer: {
    marginBottom: verticalScale(5),
    marginLeft: scale(-5.5),
    marginTop: verticalScale(40),
  },
  otpInput: {
    width: scale(45),
    height: scale(45),
    borderWidth: scale(1),
    borderBottomWidth: scale(1),
    borderRadius: scale(5),
    fontFamily: 'OpenSans-Regular',
  },
  resendOtpView: {
    alignItems: 'flex-end',
    paddingVertical: scale(5),
  },
  resendOtpText: {
    fontSize: scale(15),
    fontFamily: 'OpenSans-Medium',
  },
});
