import {
  StyleSheet,
} from 'react-native';

const blueColor = '#002366';
const blueLightColor = '#00A6FB';
const grayColor = '#A4A4A4';
const grayLightColor = '#D8D8D8';
const grayDarkColor = '#a0a0a0';
const whiteColor = '#fff';
const blackColor = '#000';
const blackLightColor = '#777';
const redColor = '#e46f66';
const orangeColor = '#ed7e2c';
const yellowColor = '#ffcc00';
const greenColor = '#3cc7a4';
const greenDarkColor = '#1b9677';
const crimsonColor = '#DC143C';
const backgroundColor = '#f7f7f7';
const fontSizeTiny = 9;
const fontSizeSmall = 11;
const fontSize = 14;
const fontSizeBig = 17;
const fontSizeHuge = 22;
const defaultElevation = 1.2;
const defaultBorderRadius = 3;

export default {
  blueColor,
  blueLightColor,
  grayColor,
  grayLightColor,
  grayDarkColor,
  whiteColor,
  blackColor,
  blackLightColor,
  redColor,
  orangeColor,
  yellowColor,
  backgroundColor,
  greenColor,
  greenDarkColor,
  crimsonColor,
  fontSizeTiny,
  fontSizeSmall,
  fontSize,
  fontSizeBig,
  fontSizeHuge,
  defaultElevation,
  defaultBorderRadius,
  elevation: (elevation: number) => (
    StyleSheet.create({
      elevation: {
        elevation,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: blackLightColor,
        shadowOpacity: 0.5,
        shadowRadius: 1,
      },
    }).elevation
  ),
  ...StyleSheet.create({
    backButton: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginLeft: 10,
    },
    screenContainer: {
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    genericContainer: {
      backgroundColor: whiteColor,
      elevation: defaultElevation,
      borderRadius: defaultBorderRadius,
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    textHeading: {
      color: yellowColor,
      fontSize: fontSize,
      textAlign: 'center',
    },
    text: {
      color: grayDarkColor,
      fontSize: fontSizeSmall,
      textAlign: 'center',
    },
    legendText: {
      fontSize: fontSize,
      color: grayDarkColor,
      textAlign: 'center',
    },
    textBold: {
      color: blackLightColor,
      fontSize: fontSizeSmall,
      fontWeight: '600',
    },
    buttonContainer: {
      backgroundColor: yellowColor,
      paddingVertical: 13,
      paddingHorizontal: 20,
      marginTop: 20,
      borderRadius: 25,
      width: 200,
    },
    buttonText: {
      color: blackColor,
      fontSize: fontSize,
      textAlign: 'center',
    },
    messageContainer: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginBottom: 5,
      backgroundColor: blackLightColor,
      borderRadius: defaultBorderRadius,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    messageText: {
      textAlign: 'center',
      fontSize: fontSizeSmall,
      color: whiteColor,
      marginLeft: 5,
      flex: 1,
    },
    stepButtonContainer: {
      backgroundColor: yellowColor,
      paddingVertical: 10,
      borderRadius: defaultBorderRadius,
      marginBottom: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    stepButtonText: {
      fontSize: fontSize,
      color: whiteColor,
      textAlign: 'center',
    },
  }),
};