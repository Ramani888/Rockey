import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CustomeHeader from '../../Custome/CustomeHeader';
import {scale, verticalScale} from '../../Custome/Responsive';
import Color from '../../Component/Color';
import Font from '../../Component/Font';
import Entypo from 'react-native-vector-icons/Entypo';

const options = [
  {label: 'Saved', icon: require('../../Assets/Img/heart.png')},
  {label: 'My Service', icon: require('../../Assets/Img/document.png')},
  {label: 'Edit Profile', icon: require('../../Assets/Img/user.png')},
  {label: 'Settings', icon: require('../../Assets/Img/setting.png')},
  {label: 'Payment', icon: require('../../Assets/Img/dollar.png')},
  {label: 'Support & Center', icon: require('../../Assets/Img/support.png')},
  {label: 'Log Out', icon: require('../../Assets/Img/logout.png')},
];

const SettingScreen = () => {
  const renderHeader = () => (
    <CustomeHeader
      backgroundColor={Color.White}
      title="Settings"
      titleStyle={styles.headerTitle}
      threeDotIcon
    />
  );

  const renderOptions = () =>
    options.map((option, index) => (
      <SettingOption key={index} label={option.label} icon={option.icon} />
    ));

  const renderBody = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{marginBottom: verticalScale(10)}}>
      <View style={styles.profileView}>
        <Image
          source={require('../../Assets/Img/Profile.png')}
          style={styles.profile}
        />
        <Text style={styles.userName}>Emanuel Richard</Text>
        <Text style={styles.userPost}>UI/UX Designer</Text>
      </View>
      <View>{renderOptions()}</View>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderBody()}
    </View>
  );
};

const SettingOption = ({label, icon}) => (
  <Pressable style={styles.optionContainer} onPress={() => ''}>
    <View style={styles.optionContent}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.optionText}>{label}</Text>
    </View>
    <Entypo name="chevron-small-right" size={scale(30)} color={Color.Gray} />
  </Pressable>
);

export default React.memo(SettingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.screenColor,
  },
  headerTitle: {
    left: scale(15),
  },
  profileView: {
    alignItems: 'center',
    backgroundColor: Color.White,
    paddingTop: verticalScale(15),
  },
  profile: {
    height: scale(56),
    width: scale(56),
  },
  userName: {
    fontSize: scale(16),
    fontFamily: Font.bold,
    color: Color.Black,
    lineHeight: verticalScale(22),
    marginTop: verticalScale(10),
  },
  userPost: {
    fontSize: scale(12),
    fontFamily: Font.medium,
    color: Color.mediumGray,
    lineHeight: verticalScale(16),
    marginTop: verticalScale(5),
    marginBottom: verticalScale(25),
  },
  optionContainer: {
    backgroundColor: Color.White,
    marginTop: scale(12),
    marginHorizontal: scale(15),
    height: verticalScale(60),
    borderRadius: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(15),
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: scale(20),
    width: scale(20),
  },
  optionText: {
    fontSize: scale(14),
    fontFamily: Font.bold,
    color: Color.Black,
    paddingLeft: scale(10),
  },
});
