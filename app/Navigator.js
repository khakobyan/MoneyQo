import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import InitialScreen from './views/initial';
import HomeScreen from './views/home';
import SideBar from './views/sideBar';
import LoginScreen from './views/auth/login';
import CustomersScreen from './views/customers/customers'

const Drawer = createDrawerNavigator(
  {
    Home: {screen: HomeScreen},
    Customers: {screen: CustomersScreen},
  },
  {
    initialRouteName: 'Customers',
    contentOptions: {
      activeTintColor: "red"
    },
    contentComponent: SideBar,
  }
)

const AppNavigator = createStackNavigator(
  {
    Initial: {screen: InitialScreen},
    Login: {screen: LoginScreen},
    Drawer: {screen: Drawer},
  },
  {
    initialRouteName: 'Initial',
    // headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);