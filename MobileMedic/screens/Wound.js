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

export default class WoundScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <View>
          <Text> WHERE IS THE WOUND? </Text>
        </View>

        <View>
          <Text> Photo here </Text>
          <View>
            <TouchableHighlight
              onPress={() => navigate("NoTourniquet")}>
              <View>
                <Text> NECK </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => navigate("NoTourniquet")}>
              <View>
                <Text> SHOULDER </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => navigate("Tourniquet")}>
              <View>
                <Text> ARM </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => navigate("NoTourniquet")}>
              <View>
                <Text> GROIN </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => navigate("Tourniquet")}>
              <View>
                <Text> LEG </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
