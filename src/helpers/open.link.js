import React, { useCallback } from "react";
import { Linking, Alert } from "react-native";

import Config from 'react-native-config';

const LINKEDIN_APP = 'linkedin://profile/';
const MAIL_APP = 'mailto:';

/**
 * Open the url passed as parameter
 *
 * @param {string} url
 *
 * @return {boolean} can open url or not.
 */
export async function openLink(url: string): boolean {
  // Checking if the link is supported for links with custom URL scheme.
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    console.log(`Don't know how to open this URL: ${url}`);
  }

  return supported;
};

/**
 * Try to open with linkedin app
 * else open with default browser
 */  
export const openLinkedin = async (): void => {
  const appUrl = String.prototype.concat(LINKEDIN_APP, Config.LINKEDIN_ID);

  const canOpenWithApp = await openLink(appUrl);
  if(!canOpenWithApp){
    openLink(Config.LINKEDIN_URL);
  }
}

/**
 * Try to open with linkedin app
 * else open with default browser
 */
export const openMail = async (): void => {
  const appUrl = String.prototype.concat(MAIL_APP, Config.MAIL_ADDRESS);

  const canOpenWithApp = await openLink(appUrl);
  if(!canOpenWithApp){
    Alert.alert(
      'Email',
      `Send me an email to ${Config.MAIL_ADDRESS}`,
      [{ text: 'Sure!' }]
    );
  }
}