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

export default class BleedingScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <View>
          <Text> BLEEDING </Text>
        </View>

        <View>
          <View>
            <Text> Step 1 </Text>
          </View>

          <Text> Find source of bleeding. </Text>

          <View>
            <Text> Step 2 </Text>
          </View>

          <Text> Open clothing so that wound is visible. </Text>

          <View>
            <Text> Step 3 </Text>
          </View>

          <Text> Identify life-threatening bleeding. </Text>
        </View>

        <View>
          <Text> IS A TRAUMA FIRST AID KIT AVAILABLE? </Text>

          <View>
            <TouchableHighlight
              onPress={() => navigate("Wound")}>
              <View>
                <Text> YES </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => navigate("NoKit")}>
              <View>
                <Text> NO </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
