import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    View, 
    Text, 
    StyleSheet, 
    KeyboardAvoidingView, 
    Platform ,
    TouchableOpacity,
    PixelRatio
} from 'react-native';
import { 
    isLogged,
    login,
    loginHasError,
    loginIsLoading
} from '../../actions';
import { 
    MQButton,
    MQActivityIndicator,
    MQInput
} from '../../components/common';
import colors from '../../utils/constants/colors';

class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null,
            // navigation: this.props.navigation
        };
        this.doLogin = this.doLogin.bind(this);
    }

    handleChangeInput(key,val){
        console.log(this.state)
        this.setState({
            [key]: val
        })
    }

    doLogin(){
        let { username, password } = this.state;
        const { navigation } = this.props;
        console.log(navigation, username, 'login page')
        this.props.login(username, password, navigation);
    }

    getDeviceRatio() {
        if (PixelRatio.get() > 3) {
            return -300
        } else if (PixelRatio.get() >= 2) {
            return -500
        } else {
            return -700
        }
    }

    render() {
        const { hasError, isLogged, isLoading } = this.props;
        console.log(this.props, 'render login page')
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior='padding'
                    keyboardVerticalOffset={this.getDeviceRatio()}
                    style={{flex: 1, justifyContent: 'center' , position: "relative"}}
                >
                    <View style={styles.inputsContainer}>
                        <MQInput
                            placeholder={'Username'}
                            value={this.state.username}
                            onChangeText = {(val)=>this.handleChangeInput('username',val)}
                        />

                        <MQInput
                            placeholder={'Password'}
                            value={this.state.password}
                            secureTextEntry={true}
                            onChangeText = {(val)=>{this.handleChangeInput('password',val)}}
                        />
                        <View style={{height: 40}}>
                        {   isLoading && !hasError ? 
                            (
                                <MQActivityIndicator 
                                    indicatorSize={Platform.OS == 'ios' ? 35 : 40} 
                                    topPadding={Platform.OS == 'ios' ? '5%' : '6%'}
                                />
                            ) : (
                                <MQButton
                                    buttonColor={colors.buttonBlue}
                                    buttonStyle={Platform.OS == 'ios' ? styles.loginButtonIos : styles.loginButton}
                                    titleStyle={{color: colors.white, fontWeight: 'bold'}}
                                    title={'Login'}
                                    onPress={() => this.doLogin() }
                                />
                            )
                        }
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
       )
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 25
    },
    buttonsStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButtonIos: {
        height: '100%',
        margin: 10, 
    },
    loginButton: {
        margin: 10, 
    },
    scrollViewStyle: {
        flex: 1
    }
});

const mapStateToProps = (state) => {
    console.log(state, 'redux state')
    return {
        isLogged: state.login.isLogged,
        hasError : state.login.hasError,
        isLoading: state.login.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password, navigation) => dispatch(login(username, password, navigation))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
