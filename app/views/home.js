import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {connect} from 'react-redux';
import colors from '../utils/constants/colors';
import { Icon } from 'react-native-elements';

class HomeScreen extends Component {

    render() {
        return (
            <KeyboardAvoidingView
                style={{flex: 1}}
            >
                <View style={styles.header}>
                    <Fragment>
                        <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                            <Icon size={40} type='material' name='menu'/>
                        </TouchableOpacity>
                        <Text style={{...styles.titleStyle, ...{flex: 5, paddingLeft: 5, paddingRight: 5}}}>
                            My Profile
                        </Text>
                    </Fragment>
                </View>
                <View>
                    <Text style={styles.keys}>Full name: <Text style={styles.value}></Text>{this.props.user.name}</Text>
                    <Text style={styles.keys}>Phone: <Text style={styles.value}></Text>{this.props.user.attributes[0].phone}</Text>
                    <Text style={styles.keys}>Customer ID: <Text style={styles.value}></Text>{this.props.user.attributes[0].customerid}</Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        // flex: 0.8,
        borderBottomWidth: 0.6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '2%',
        paddingRight: '5%'
    },
    titleStyle: {
		fontSize: 22, 
		fontFamily: 'HelveticaNeue-Medium', 
		color: colors.navy
	},
	iconHidden: {
		display: 'none'
	}
})

const mapStateToProps = state => {
    const { user } = state.user;
    return {user};
}

export default connect(mapStateToProps, null)(HomeScreen);