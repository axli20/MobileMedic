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

export default class IdentifyTraumaScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <View>
          <Text> IDENTIFY TRAUMA </Text>
        </View>

        <TouchableHighlight
          onPress={() => navigate("Bleeding")}>
          <View>
            <Text> BLEEDING </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => navigate("IdentifyTrauma")}>
          <View>
            <Text> UNCONSCIOUSNESS </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => navigate("IdentifyTrauma")}>
          <View>
            <Text> SEVERED LIMB </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => navigate("IdentifyTrauma")}>
          <View>
            <Text> DAZED/CONFUSION </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => navigate("IdentifyTrauma")}>
          <View>
            <Text> OTHER </Text>
          </View>
        </TouchableHighlight>

      </View>
    )
  }
}
