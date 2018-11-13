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

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <View>
          <Text> MobileMedic </Text>
          <Text> SAVE A LIFE </Text>
          <Text> What everyone should know to stop bleeding after an injury. </Text>
        </View>

        <View>
          <Text> ENSURE YOUR SAFETY </Text>
          <Text> Ensure the scene is safe. </Text>
          <Text> If you are threatened at any time, remove yourself from danger
                 and go to a safe location. </Text>
          <Text> Wear gloves if available. </Text>
        </View>

        <TouchableHighlight
          onPress={() => navigate("IdentifyTrauma")}>
          <View>
            <Text> CONTINUE, I AM SAFE </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
