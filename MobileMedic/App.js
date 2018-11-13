import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './screens/Home.js';
import BleedingScreen from './screens/Bleeding.js';
import IdentifyTraumaScreen from './screens/IdentifyTrauma.js';
import NoKitScreen from './screens/NoKit.js';
import NoTourniquetScreen from './screens/NoTourniquet.js';
import TourniquetScreen from './screens/Tourniquet.js';
import TournInstructionScreen from './screens/TourniquetInstructions.js';
import WoundScreen from './screens/Wound.js';

console.disableYellowBox = true;

const App = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  IdentifyTrauma: {
    screen: IdentifyTraumaScreen
  },
  Bleeding: {
    screen: BleedingScreen
  },
  Wound: {
    screen: WoundScreen
  },
  Tourniquet: {
    screen: TourniquetScreen
  },
  TourniquetInstructions: {
    screen: TournInstructionScreen
  },
  NoTourniquet: {
    screen: NoTourniquetScreen
  },
  NoKit: {
    screen: NoKitScreen
  }
},
{
  navigationOptions: {
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
      elevation: 0,
      zIndex: 100, top: 0, left: 0, right: 0
    },
  }
 }
)

export default App;
