import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

const datas = [
  {
    name: "Home",
    route: "Home",
    bg: "#C5F442"
  },
]

export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log('updated')
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
        <Text>Side Bar</Text>
      </View>
    )
  }
} 