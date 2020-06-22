
// @flow

import { DrawerActions } from '@react-navigation/native';

let navigation: any | null = null;

export default {
  setNavigator(navigator: any): void{  
    navigation = navigator;
  },

  pop(): void{
    if(navigation !== null){
      navigation.pop();
    }
  },

  push(screen: string, params?: any): void{
    if(navigation !== null){
      navigation.push(screen,params);
    }
  },

  popToTop(): void{
    if(navigation !== null){
      navigation.navigate(screen);
    }
  },

  replace(screen: string, params?: any): void{
    if(navigation !== null){
      navigation.replace(screen, params);
    }
  },

  isFocused(): bool{
    if(navigation !== null){
      return navigation.isFocused();
    }
    return false;
  },

  openDrawer(): void{
    if(navigation !== null){
      navigation.dispatch(DrawerActions.openDrawer());
    }
  },

  closeDrawer(): void {
    if(navigation !== null){
      navigation.dispatch(DrawerActions.closeDrawer());
    }
  },

  toggleDrawer(): void {
    if(navigation !== null){
      navigation.dispatch(DrawerActions.toggleDrawer());
    }
  }
}