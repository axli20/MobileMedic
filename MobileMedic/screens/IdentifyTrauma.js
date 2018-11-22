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

export default class IdentifyTraumaScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View style={Style.mainView}>
        <View style={Style.singleLineView}>
          <Text style={Style.headerText}> IDENTIFY TRAUMA </Text>
        </View>

        <View style={Style.buttonBlock}>
          <TouchableHighlight
            style={Style.buttonLong}
            onPress={() => navigate("Bleeding")}>
            <View style={Style.buttonLong}>
              <Text style={Style.buttonText}> BLEEDING </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={Style.buttonLong}
            onPress={() => navigate("IdentifyTrauma")}>
            <View style={Style.buttonLong}>
              <Text style={Style.buttonText}> UNCONSCIOUSNESS </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={Style.buttonLong}
            onPress={() => navigate("IdentifyTrauma")}>
            <View style={Style.buttonLong}>
              <Text style={Style.buttonText}> SEVERED LIMB </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={Style.buttonLong}
            onPress={() => navigate("IdentifyTrauma")}>
            <View style={Style.buttonLong}>
              <Text style={Style.buttonText}> DAZED/CONFUSION </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={Style.buttonLong}
            onPress={() => navigate("IdentifyTrauma")}>
            <View style={Style.buttonLong}>
              <Text style={Style.buttonText}> OTHER </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
