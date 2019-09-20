import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

class CustomersScreen extends Component {
    renderCustomerItem(item) {
        return (
            <TouchableOpacity  style={{...styles.groupContainerStyle, ...active}}>
                <View key={item.index} style={styles.groupMain} >
                    <TouchableOpacity style={{flex: 1, marginRight: '6%'}} >
                        <View >
                            <Avatar 
                                rounded
                                source={{
                                    uri: getFullImageUrl(item.item.avatar_src)
                                }}
                                title={item.item.company_name.trim().substring(0,1)} 
                                overlayContainerStyle={{backgroundColor: colors.sfBtnBackgroundGrey}}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 6, justifyContent: 'center'}}>
                        <View style={{flexDirection: 'column', marginBottom: hasAddress ? 3 : 0}}>
                            <Text numberOfLines={1} style={{color:colors.sfHeaderText,fontWeight:'bold',fontFamily:'OpenSans-Bold'}}>
                                {item.item.company_name.trim()}
                            </Text>
                            {this.renderGroupAddress(item.item)}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={this.showSections(item)}>

                        <View>
                            <Icon 
                                type='font-awesome' 
                                color={colors.sfBtnBackgroundGrey} 
                                name={'ellipsis-h'}
                                size={15}
                                reverse
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                { selectedGroup.show && selectedGroup.index == item.index ? (
                        this.renderGroupSections(item)
                    ) : null
                }
            </TouchableOpacity>   
        )
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={{flex: 1}}
            >
                <FlatList
                    style={{flex: 1, padding: 10 }}
                    renderItem={(item) => item.item.public_for_members ? this.renderGroup(item) : null}
                    data={filteredGroups}
                    keyExtractor={(item, index) => index.toString()}
                />
            </KeyboardAvoidingView>
        );
    }
}



export default CustomersScreen;