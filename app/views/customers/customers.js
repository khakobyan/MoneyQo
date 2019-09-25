import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { fetchCustomers, setCustomersLoading } from '../../actions'
import colors from '../../utils/constants/colors';

class CustomersScreen extends Component {
    componentDidMount() {
        const {fetchCustomers} = this.props
        fetchCustomers();
        console.log(this.props, 'gfgfdgffgdgf')
    }

    renderCustomerItem(item) {
        console.log(item, 'jkkjkjkjkk')
        return (
            <TouchableOpacity  style={{...styles.groupContainerStyle}}>
                <View key={item.index} style={styles.groupMain} >
                        <View style={{flexDirection: 'column', alignItems: "center"}}>
                            <Text numberOfLines={1} style={{color:colors.sfHeaderText, fontWeight:'bold', marginBottom: 10}}>
                                {item.firstName} {item.lastName}
                            </Text>
                            <Text style={{alignSelf: 'stretch'}}>
                                111111
                            </Text>
                        </View>
                        {/* <View>
                            <Text>
                                22222
                            </Text>
                        </View> */}
                </View>
            </TouchableOpacity>   
            // <View>
            //     <Text>111</Text>
            // </View>
        )
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={{flex: 1}}
            >
                <FlatList
                    style={{flex: 1, padding: 10 }}
                    renderItem={(item) => this.renderCustomerItem(item.item)}
                    data={this.props.customers}
                    keyExtractor={(item, index) => index.toString()}
                />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    // groupMain: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    groupContainerStyle: {
        flex: 1,
        // alignItems: 'center',
        borderRadius: 10,
        // height: 100,
        borderWidth:2,
        borderColor: colors.sfBlue,
        padding: 20,
        marginVertical: 5,
        backgroundColor: colors.white
    },
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