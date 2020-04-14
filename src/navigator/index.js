
// @flow

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
      navigation.popToTop();
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
  }
}