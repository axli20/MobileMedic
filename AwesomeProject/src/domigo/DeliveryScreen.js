import React, {
  Component
} from 'react';

import {
  View,
  Text,
  Button,
  TouchableHighlight,
} from 'react-native';

import Style from './DomigoStyle';

export default class DeliveryScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>A delivery for {params.firstName} {params.lastName}</Text>
        <Text>Time of order: {params.time}</Text>
        <Text>Phone: {params.phone}</Text>
        <Text>Order details: $ {params.price} for {params.items} items</Text>
        <Text>Address: {params.address}</Text>
      </View>
    );
  }
}
