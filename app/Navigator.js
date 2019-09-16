import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import InitialScreen from './views/initial';
import HomeScreen from './views/home';
import SideBar from './views/sideBar';
import LoginScreen from './views/auth/login';
import CustomersScreen from './views/customers'

const Drawer = createDrawerNavigator(
  {
    Home: {screen: HomeScreen}
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: SideBar,
  }
)

const AppNavigator = createStackNavigator(
  {
    Initial: {screen: InitialScreen},
    Drawer: {screen: Drawer},
  },
  {
    initialRouteName: 'Initial',
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);