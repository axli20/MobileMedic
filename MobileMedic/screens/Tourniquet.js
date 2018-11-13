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

export default class TourniquetScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <View>
          <Text> IS A TOURNIQUET AVAILABLE? </Text>
        </View>

        <View>
          <TouchableHighlight
            onPress={() => navigate("TourniquetInstructions")}>
            <View>
              <Text> YES </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigate("NoTourniquet")}>
            <View>
              <Text> NO </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
