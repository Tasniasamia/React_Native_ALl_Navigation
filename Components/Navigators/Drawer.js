import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';
import Contact from '../Layout/Contact';
import About from '../Layout/About';
import Home from '../Layout/Home';
import Bottom from './Bottom';

const Drawer =() => {

    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Bottom" component={Bottom} />

    </Drawer.Navigator>
    );
};

export default Drawer;
