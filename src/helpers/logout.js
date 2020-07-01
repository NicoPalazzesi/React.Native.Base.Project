// @flow

import { Alert } from 'react-native';

import Navigator from '../navigator';

export const confirmLogout = (onPressConfirm: Function): void => {
  Alert.alert(
		'Confirm Logout',
		'Do you want to log out?',
		[
      {	text: 'Cancel' },
			{	text: 'Confirm', onPress: () => onConfirmLogout(onPressConfirm) }
		]
	);
}

const onConfirmLogout = (onPressConfirm: Function): void => {
  Navigator.closeDrawer();
  onPressConfirm();
}

export const onLogoutSuccess = (): void => {
  Navigator.replace('Login');
  Alert.alert(
		'Successful logout',
		'Come back soon!',
		[
			{	text: 'Accept' }
		]
	);
}

export const onLogoutFailure = (onPressRetry: Function): void => {
  Alert.alert(
		'Logout failed',
		'Please, try again later.',
		[
			{	text: 'Retry', onPress: onPressRetry },
      {	text: 'Accept' }
		]
	);
}