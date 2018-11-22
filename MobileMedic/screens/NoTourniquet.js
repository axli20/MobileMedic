import React, {
  Component
} from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';

import Style from '../genStyle.js';

export default class NoTourniquetScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <View style={Style.stepBorder}>
          <Text style={Style.stepText}> Step 1 </Text>
        </View>

        <Text style={Style.regText}>
          Pack the wound with bleeding control (hemostatic) gauze,
          any gauze, or clean cloth.
        </Text>

        <View style={Style.stepBorder}>
          <Text style={Style.stepText}> Step 2 </Text>
        </View>

        <Text style={Style.regText}> Apply steady, direct pressure. </Text>
      </View>
    )
  }
}
