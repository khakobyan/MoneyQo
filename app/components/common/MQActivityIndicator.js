import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import colors from '../../utils/constants/colors';

export const MQActivityIndicator = (props) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: props.topPadding}}>
        <ActivityIndicator
            size={props.indicatorSize}
            color={props.indicatorColor}
        />
    </View>
);

MQActivityIndicator.defaultProps = {
    indicatorSize: 'large',
    indicatorColor: colors.sfBlue,
    topPadding: 0
};

export default MQActivityIndicator;