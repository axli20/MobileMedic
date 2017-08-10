import React, {
  Component
} from 'react';

import {
  Text,
  View,
  Image,
} from 'react-native';

import Style from './DomigoStyle';

export default class NewDeliveryScreen extends React.Component {
  render() {
    return (
      <View style={Style.rootContainer}>
        <Text>New Delivery Screen</Text>
        <Text>OCR Stuff to be developed here</Text>
        <View style={Style.list}>

        </View>
      </View>
    );
  }
}
