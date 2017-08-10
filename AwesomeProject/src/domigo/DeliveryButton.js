import React, {
  Component
} from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  Button,

} from 'react-native';

import Style from './DomigoStyle.js';

export default class DeliveryButton extends React.Component {
/**
  _checkPlural(items) {
    if(items > 1)
      return 'items';
    else {
      return 'item';
    }
  }
  **/

  render() {
        return (
            <TouchableHighlight style={Style.deliveryButtonPanel}
                                onPress={this.props.onPress}
                                underlayColor="#BFD3E2">
                <View>
                  <View style={Style.nameAndTime}>
                    <Text>{this.props.firstName} {this.props.lastName}</Text>
                    <Text>{this.props.time}</Text>
                  </View>

                  <View>
                    <Text>{this.props.phone}</Text>
                  </View>

                  <View>
                    <Text>$ {this.props.price} for {this.props.items} items</Text>
                  </View>

                  <View>
                    <Text>{this.props.address}</Text>
                  </View>
                </View>
            </TouchableHighlight>
        );

  }
}
