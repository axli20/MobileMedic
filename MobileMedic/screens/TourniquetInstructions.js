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

export default class TournInstructionScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <View>
          <View>
            <Text> Step 1 </Text>
          </View>

          <Text> Apply tourniquet above the bleeding site. </Text>

          <View>
            <Text> Step 2 </Text>
          </View>

          <Text> Tighten until the bleeding stops. </Text>
        </View>

        <Text> Photo of tourniquet here. </Text>
      </View>
    )
  }
}
