let navigation = null;

export default {
  setNavigator(navigator){  
    navigation = navigator;
  },

  pop(){
    if(navigation !== null){
      navigation.pop();
    }
  },

  push(screen, params){
    if(navigation !== null){
      navigation.push(screen,params);
    }
  },

  popToTop(){
    if(navigation !== null){  
      navigation.popToTop();
    }
  },

  replace(screen, params){
    if(navigation !== null){
      navigation.replace(screen, params);
    }
  },

  isFocused(){
    if(navigation !== null){
      return navigation.isFocused();
    }
    return false;
  }
}