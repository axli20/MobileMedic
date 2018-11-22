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

export default class BleedingScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View>
        <View>
          <Text style={Style.headerText}> BLEEDING </Text>
        </View>

        <View>
          <View style={Style.stepBorder}>
            <Text style={Style.stepText}> Step 1 </Text>
          </View>

          <Text style={Style.regText}> Find source of bleeding. </Text>

          <View style={Style.stepBorder}>
            <Text style={Style.stepText}> Step 2 </Text>
          </View>

          <Text style={Style.regText}> Open clothing so that wound is visible. </Text>

          <View style={Style.stepBorder}>
            <Text style={Style.stepText}> Step 3 </Text>
          </View>

          <Text style={Style.regText}> Identify life-threatening bleeding. </Text>
        </View>

        <View>
          <Text style={Style.subHeaderText}> IS A TRAUMA FIRST AID KIT AVAILABLE? </Text>

          <View>
            <TouchableHighlight
              onPress={() => navigate("Wound")}>
              <View style={Style.buttonShort}>
                <Text style={Style.buttonText}> YES </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => navigate("NoKit")}>
              <View style={Style.buttonShort}>
                <Text style={Style.buttonText}> NO </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
