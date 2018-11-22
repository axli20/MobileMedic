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

export default class TourniquetScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <View>
          <Text style={Style.headerText}> IS A TOURNIQUET AVAILABLE? </Text>
        </View>

        <View>
          <TouchableHighlight
            onPress={() => navigate("TourniquetInstructions")}>
            <View style={Style.buttonShort}>
              <Text style={Style.buttonText}> YES </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigate("NoTourniquet")}>
            <View style={Style.buttonShort}>
              <Text style={Style.buttonText}> NO </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
