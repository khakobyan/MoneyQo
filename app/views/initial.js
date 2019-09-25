import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import Storage from '../services/Storage';
import { setUser } from '../actions/auth/login';
import {setAxiosHeader, removeAxiosHeader, validateToken, resetNavigation} from "../utils/helpers";

class InitialScreen extends Component {
    static navigationOptions = {
      header: null
    };

    componentDidMount() {
      const {
        navigation,
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
                setUser(response.data);
                resetNavigation(navigation, 'Drawer')
                // setToken(token);
              })
              .catch(() => {
                // setUser({})
                console.log('erorr44')
                removeAxiosHeader();
                resetNavigation(navigation, 'Login');
              })
          } else {
            console.log('empty')
            resetNavigation(navigation, 'Login');            
          }
        })
        .catch(() => {
          console.log('erorr56')
          resetNavigation(navigation, 'Login');          
        })
      // resetNavigation(navigation, 'Drawer');
    }

    render() {
      console.log('initial')
      return (
        <View>
          <Text></Text> 
        </View>
      );
    }
}

export default connect(null, {
  setUser
})(InitialScreen);
