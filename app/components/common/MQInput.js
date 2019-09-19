import React from 'react';
import {StyleSheet, Keyboard} from 'react-native';
import {Input} from 'react-native-elements';
import colors from '../../utils/constants/colors';

export const MQInput = (props) => {
    return (
        <Input
            inputContainerStyle={{...styles.containerStyles, ...props.containerStyle}}
            inputStyle={{fontSize: 14, padding: props.small ? 5 : 20, ...props.inputStyle}}
            placeholderTextColor={colors.darkGrey}
            placeholder={props.placeholder}
            autoCapitalize={'none'}
            autoCorrect={false}
            // autoComplete={ props.autoComplete }
            onChangeText={(value) => props.onChangeText(value)}
            onFocus={()=>{
                if(props.dismissKeyboard){
                    console.log(props.dismissKeyboard , "dismiss")
                    Keyboard.dismiss();
                }
                return props.onFocus();
            }}
            value={props.value}
            secureTextEntry={props.secureTextEntry}
            dismissKeyboard={props.dismissKeyboard}
        />
    );
};

MQInput.defaultProps = {
    placeholder: '',
    containerStyle: {},
    // autoComplete: 'off',
    inputStyle: {},
    secureTextEntry: false,
    onChangeText: ()=>{},
    onFocus: ()=>{},
    dismissKeyboard: false,
    small: false
};

const styles = StyleSheet.create({
    containerStyles: {
        backgroundColor: colors.lightGray,
        width: 250,
        borderRadius: 15,
        borderBottomWidth: 0,
        margin: 10
    }
});

export default MQInput;