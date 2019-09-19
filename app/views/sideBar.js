import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { logout } from '../actions/auth/login';

const data = [
  {
    name: "My Profile",
    route: "Home",
  },
  {
    name: "My Customers",
    route: "Customers",
  },
  {
    name: "Logout",
  },
]

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log('updated')
  }

  navigate(item) {
    const {navigation} = this.props;
    item.name == 'Logout' ? this.props.logout(navigation) : navigation.navigate(item.route);
  }

  renderListItem(item) {
    return (
      <ListItem 
        containerStyle={{paddingLeft: 0}}
        titleStyle={{fontSize: 22}}
        title={item.name}
        bottomDivider
        onPress={() => this.navigate(item)}
      />
    )
  }

  renderFlatList() {
    return (
      <FlatList 
        data={data}
        renderItem={(item) => this.renderListItem(item.item)}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }

  render() {
    return (
      <View style={{ flex:7, justifyContent: 'center', backgroundColor: "#fff", top: -1 }}>
        {this.renderFlatList()}
      </View>
    )
  }
} 

export default connect(null, { logout })(SideBar);