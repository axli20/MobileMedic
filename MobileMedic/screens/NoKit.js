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

export default class NoKitScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <View>
          <Text> {"IF YOU DON'T HAVE A TRAUMA FIRST AID KIT"} </Text>
        </View>

        <View>
          <View>
            <Text> Step 1 </Text>
          </View>

          <Text> Apply direct pressure on wound using clean cloth. </Text>
        </View>

        <Text> Photo of treatment here. </Text>
      </View>
    )
  }
}
