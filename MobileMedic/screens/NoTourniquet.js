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

export default class NoTourniquetScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <View>
          <Text> Step 1 </Text>
        </View>

        <Text>
          Pack the wound with bleeding control (hemostatic) gauze,
          any gauze, or clean cloth.
        </Text>

        <View>
          <Text> Step 2 </Text>
        </View>

        <Text> Apply steady, direct pressure. </Text>
      </View>
    )
  }
}
