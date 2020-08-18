import React, { useCallback } from "react";
import { Linking } from "react-native";

export async function openLink(url: string): void {
  // Checking if the link is supported for links with custom URL scheme.
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    console.log(`Don't know how to open this URL: ${url}`);
  }
};