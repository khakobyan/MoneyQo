import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import Storage from '../services/Storage';
import { setToken, setUser } from '../actions/user/user';
import {setAxiosHeader, removeAxiosHeader, validateToken, resetNavigation} from "../utils/helpers";

class InitialScreen extends Component {
    componentDidMount() {
      const {
        navigation,
        setToken,
        setUser
      } = this.props;
      // Storage.removeToken()
      Storage.getToken()
        .then(token => {
          console.log(token, 'kkkk')
          if (token) {
            setAxiosHeader(token);
            validateToken()
              .then(response => {
                console.log(response, 'responjse user');
                // setUser(response.data.user);
                // setToken(token);
                resetNavigation(navigation, 'Drawer');
              })
              .catch(() => {
                // setUser({})
                removeAxiosHeader();
                resetNavigation(navigation, 'Login');
              })
          } else {
            console.log('empty')
            resetNavigation(navigation, 'Login');            
          }
        })
        .catch(() => {
          resetNavigation(navigation, 'Login');          
        })
      // resetNavigation(navigation, 'Drawer');
    }

    render() {
      console.log('initial')
      return (
        <View>
          <Text>Initial</Text> 
        </View>
      );
    }
}

export default connect(null, {
  setToken,
  setUser
})(InitialScreen);
