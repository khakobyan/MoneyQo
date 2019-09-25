import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { fetchCustomers, setCustomersLoading } from '../../actions'
import colors from '../../utils/constants/colors';
import {Icon} from 'react-native-elements';

class CustomersScreen extends Component {

    componentDidMount() {
        const {fetchCustomers} = this.props
        fetchCustomers();
    }

    renderCustomerItem(item) {
        const cDay = `${new Date(item.ctimestamp).getDate()}/${new Date(item.ctimestamp).getMonth()+1}/${new Date(item.ctimestamp).getFullYear()}`
        const lDay = `${new Date(item.lastLogin).getDate()}/${new Date(item.lastLogin).getMonth()+1}/${new Date(item.lastLogin).getFullYear()}`
        return (
            <TouchableOpacity  style={{...styles.groupContainerStyle}}>
                <View key={item.index} style={styles.groupMain} >
                    <View style={{flexDirection: 'column', alignItems: "center"}}>
                        <Text numberOfLines={1} style={{color:colors.sfHeaderText, fontWeight:'bold', marginBottom: 10}}>
                            {item.firstName} {item.lastName}
                        </Text>
                        <Text style={styles.textTitle}>
                            Username: <Text style={styles.textVal}>{item.userName}</Text>
                        </Text>
                        <Text style={styles.textTitle}>
                            Phone: <Text style={styles.textVal}>{item.phoneNumber}</Text>
                        </Text>
                        <Text style={styles.textTitle}>
                            Created: <Text style={styles.textVal}>{cDay}</Text>
                        </Text>
                        <Text style={styles.textTitle}>
                            Last logged in: <Text style={styles.textVal}>{lDay}</Text>
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>   
        )
    }

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
                        Customers
                    </Text>
                </Fragment>
                </View>
                <FlatList
                    contentContainerStyle={{display: "flex",
                    paddingHorizontal: '2%',
                    paddingTop: '5%',
                    paddingBottom: '8%',}}
                    renderItem={(item) => this.renderCustomerItem(item.item)}
                    data={this.props.customers}
                    keyExtractor={(item, index) => index.toString()}
                />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    groupContainerStyle: {
        flex: 1,
        borderRadius: 10,
        borderWidth:2,
        borderColor: colors.sfBlue,
        padding: 20,
        marginVertical: 5,
        backgroundColor: colors.white
    },
    textTitle: {
        fontSize: 16, 
        fontWeight: "700", 
        alignSelf: 'stretch'
    },
    textVal: {
        fontSize: 14,
        fontWeight: "100"
    },
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
});

const mapStateToProps = state => {
    console.log(state, 'state customers')
    const { customers, loading } = state.customers;
    return { customers, loading };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCustomers:() => dispatch(fetchCustomers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersScreen);