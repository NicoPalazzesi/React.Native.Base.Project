// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  findNodeHandle,
} from 'react-native';

import Icon, { type MaterialCommunityIconsGlyphs } from 'react-native-vector-icons/MaterialCommunityIcons';

import FloatingLabel from './floating.label';

import Style from '../stylesheet';

type Props = {
  placeholder: string,
  placeholderTextColor: string,
  value: string,
  onChange?: (text: string) => any,
  validationFunction?: (text: string) => string,
  keyboardType: 'default' | 'email-address' | 'numeric' | 'phone-pad',
  returnKeyType: 'next' | 'done',
  onSubmit?: () => any,
  multiline: bool,
  style?: any,
  inputStyle?: any,
  autoCapitalize: 'none' | 'words',
  autoCorrect: bool,
  onFocus?: () => any,
  onBlur?: () => any,
  secureTextEntry: bool,
  icon?: MaterialCommunityIconsGlyphs,
};

type State = {
  value: string,
  hasFocus: bool,
  isSecureTextEntry: bool,
};

export default class FormInput extends PureComponent<Props, State> {

  textInput: TextInput | null = null;

  static defaultProps = {
    keyboardType: 'default',
    returnKeyType: 'done',
    multiline: false,
    autoCapitalize: 'none',
    autoCorrect: false,
    value: '',
    secureTextEntry: false,
    placeholderTextColor: Style.grayColor,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.value,
      hasFocus: false,
      isSecureTextEntry: props.secureTextEntry,
    };
  }

  componentDidUpdate(props: Props, state: State) {
    if(this.state.value !== state.value) {
      if(typeof this.props.onChange !== 'undefined') {
        this.props.onChange(this.state.value);
      }
    }
  }

  UNSAFE_componentWillReceiveProps(props: Props) {
    if(
      this.state.value !== props.value
    ) {
      this.setState({ value: props.value });
    }
  }

  onRef = (elem: TextInput | null): void => {
    this.textInput = elem;
  }

  onChange = (value: string) => {
    const {
      validationFunction,
    } = this.props;
    this.setState({
      value: typeof validationFunction !== 'undefined' ?
        validationFunction(value)
        :
        value
    });
  }

  onSubmitEditing = (): void => {
    this.props.onSubmit && this.props.onSubmit();
  }

  onFocus = (): void => {
    this.setState({ hasFocus: true });
    this.props.onFocus && this.props.onFocus();
  }

  onBlur = (): void => {
    this.setState({ hasFocus: false });
    this.props.onBlur && this.props.onBlur();
  }

  blur(): void {
    if(this.textInput !== null) {
      this.textInput.blur();
    }
  }

  focusIOS(scrollView: any, extraHeight: number = 0): void {
    if(Platform.OS === 'ios') {
      setTimeout(() => this.focus(scrollView, extraHeight), 220);
    }
  }

  focus(scrollView?: any, extraHeight: number = 0): void {
    if(this.textInput === null) {
      return;
    }
    if(Platform.OS === 'ios') {
      if(scrollView) {
        scrollView
          .getScrollResponder()
          .scrollResponderScrollNativeHandleToKeyboard(
            findNodeHandle(this.textInput),
            extraHeight,
            true
          )
        ;
      }
    }
    this.textInput.focus();
  }

  onPressPass = (): void => {
    this.setState({
      isSecureTextEntry: !this.state.isSecureTextEntry
    })
  }

  render() {
    const {
      placeholder,
      placeholderTextColor,
      keyboardType,
      returnKeyType,
      multiline,
      style,
      inputStyle,
      autoCapitalize,
      autoCorrect,
      secureTextEntry,
      icon,
    } = this.props;
    const {
      value,
      hasFocus,
      isSecureTextEntry,
    } = this.state;
    return (
<View style={[styles.container, style]}>
  <FloatingLabel
    show={value !== ''}
    label={placeholder}
    style={styles.floatingLabel}
  />
  <View style={styles.iconAndInputContainer}>
    {typeof icon !== 'undefined' &&
    <Icon
      name={icon}
      size={Style.fontSize}
      color={Style.grayColor}
      style={styles.icon}
    />
    }
    <TextInput
      ref={this.onRef}
      placeholder={placeholder}
      onChangeText={this.onChange}
      onFocus={this.onFocus}
      onBlur={this.onBlur}
      placeholderTextColor={placeholderTextColor}
      underlineColorAndroid="transparent"
      style={[
        styles.input,
        multiline ? styles.textarea : null,
        inputStyle,
      ]}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      onSubmitEditing={this.onSubmitEditing}
      multiline={multiline}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      value={value}
      secureTextEntry={isSecureTextEntry}
    />
    {secureTextEntry &&
    <TouchableOpacity
      style={styles.eyeContainer}
      onPress={this.onPressPass}
    >
      <Icon
        name={isSecureTextEntry ? "eye-off" : "eye"}
        size={20}
        color={isSecureTextEntry ? Style.grayColor : Style.blueLightColor}
      />
    </TouchableOpacity>
    }
  </View>
  <View style={[styles.hr, hasFocus ? styles.activeHr : null]} />
</View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 45
  },
  iconAndInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  floatingLabel: {
    top: -3,
    left: 5,
  },
  icon: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 15
  },
  input: {
    color: Style.blackColor,
    fontSize: Style.fontSize,
    flex: 1,
    marginTop: 10,
    ...Platform.select({
      ios: {
        height: Style.fontSize + 15,
      },
    }),
  },
  textarea: {
    paddingLeft: 5,
  },
  hr: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Style.grayColor,
  },
  activeHr: {
    borderBottomColor: Style.blueLightColor,
  },
  eyeContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 15,
    top: 15,
  },
});