import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import Home from '../Layout/Home';
import About from '../Layout/About';
import Contact from '../Layout/Contact';

const Bottom =() => {

    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Contact" component={Contact} />

      </Tab.Navigator>
    );
};

export default Bottom;
