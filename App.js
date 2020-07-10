import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { Provider  } from 'react-redux'
import rootReducer from './reducers'
import {createStore} from 'redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./component/HomeScreen"
import EnquiryDetail from './component/EnquiryDetail';

const Stack = createStackNavigator();
const store = createStore(rootReducer)


class App extends Component {
  render() {
    console.log(store.getState())
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{title : "Enquires"}}/>
            <Stack.Screen name="EnquiryDetail" component={EnquiryDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
