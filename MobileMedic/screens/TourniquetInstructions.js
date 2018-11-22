import React, {
  Component
} from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image,
} from 'react-native';

import Style from '../genStyle.js';

export default class TournInstructionScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <View>
          <View style={Style.stepBorder}>
            <Text style={Style.stepText}> Step 1 </Text>
          </View>

          <Text style={Style.regText}> Apply tourniquet above the bleeding site. </Text>

          <View style={Style.stepBorder}>
            <Text style={Style.stepText}> Step 2 </Text>
          </View>

          <Text style={Style.regText}> Tighten until the bleeding stops. </Text>
        </View>

        <View style={Style.imageViewSmall}>
          <Image
            source={require('../imgs/tourniquet.png')}
            style={Style.image}
          />
        </View>
      </View>
    )
  }
}
