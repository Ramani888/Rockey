import SettingScreen from '../Screen/AppScreen/SettingScreen';
import LoginScreen from '../Screen/AuthScreen/LoginScreen';
import OTPScreen from '../Screen/AuthScreen/OTPScreen';

const ScreenName = {
  login: 'Login',
  setting: 'Setting',
  otp: 'OTP'
};

const Screen = {
  loginScreen: LoginScreen,
  settingScreen: SettingScreen,
  otpScreen: OTPScreen
};

export {ScreenName, Screen};
