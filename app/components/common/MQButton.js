import React from 'react';
import {Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';

const renderIcon = (name) => {
    return (
        <Icon
            style={{paddingRight: 10}}
            name={name}
            size={15}
            color="white"
        />
    );
};

export const MQButton = (props) => (
    <Button
        icon={props.icon ? renderIcon(props.icon) : null}
        containerStyle={{ flex: 1, justifyContent: 'flex-start', ...props.containerStyle}}
        buttonStyle={{...styles.defaultButtonStyle, backgroundColor: props.buttonColor, ...props.buttonStyle}}
        titleStyle={{...styles.defaultTitleStyle, ...props.titleStyle}}
        title={props.title}
        onPress={() => props.onPress()}
    />
);

const styles = StyleSheet.create({
    defaultButtonStyle: {
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10
    },
    defaultTitleStyle: {
        fontSize: 14
    }
});

MQButton.defaultProps = {
    icon: null,
    buttonStyle: {},
    titleStyle: {},
    containerStyle: {},
    buttonColor: 'blue',
    onPress: () => {}
};

export default MQButton;