/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './components/Home'

import VasectomyHome from './components/VasectomyHome';
import EjaculationCounter from './components/EjaculationCounter'
import EjaculationTimeline from './components/EjaculationTimeline'

import KidneyHome from './components/KidneyHome'

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: '👋 Welcome to PostCare'}}
        />
        <Stack.Screen
          name="VasectomyHome"
          component={VasectomyHome}
          options={{title: '✂️ Post-Operation'}}
        />
        <Stack.Screen
          name="EjaculationCounter"
          component={EjaculationCounter}
          options={{title: '💦 Ejaculation Counter'}}
        />
        <Stack.Screen
          name="KidneyHome"
          component={KidneyHome}
          options={{title: '🪨 Post-Operation'}}
        />
        <Stack.Screen
          name="EjaculationTimeline"
          component={EjaculationTimeline}
          options={{title: '⌛ Recovery Timeline'}}
        />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};


export default App;
