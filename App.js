import React, {Fragment} from 'react';
import {
	SafeAreaView,
	StatusBar,
} from 'react-native';
import {Provider} from "react-redux";
import {store} from './app/store';
import Navigator from './app/Navigator';

const App = () => {
	return (
		<Fragment>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
				<Provider store={store} >
					<Navigator/>
				</Provider>
			</SafeAreaView>
		</Fragment>
	);
};

export default App;
