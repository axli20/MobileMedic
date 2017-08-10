//Map Screen
import React, {
  Component
} from 'react';

import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';

import Style from './DomigoStyle';
import MapView from 'react-native-maps';

export default class MapScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={Style.rootContainer}>
        <Text>The Map Screen</Text>
        <Text>Google Maps View of all orders to be listed here</Text>
        <Text>Address List:</Text>
        <View>
          {params.addressList}
        </View>
        <View style={Style.list}>

        </View>
      </View>
    );
  }
}
