import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import Home from '../Layout/Home';
import Drawer from './Drawer';
import About from '../Layout/About';
import Contact from '../Layout/Contact';
import { createStackNavigator } from '@react-navigation/stack';
import Bottom from './Bottom';

const Stackcontainer =() => {

   const Stack = createStackNavigator();
       return (
       <NavigationContainer>

<Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Drawer} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />

      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name="bottom" component={Bottom}/>
    
    </Stack.Navigator>
       </NavigationContainer>
    );
};

export default Stackcontainer;
