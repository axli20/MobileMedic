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
      <View style={Style.mainView}>
        <View style={Style.singleLineView}>
          <Text style={Style.headerText}> BLEEDING </Text>
        </View>

        <View style={Style.threeStepBlock}>
          <View style={Style.stepBorder}>
            <Text style={Style.stepText}> STEP 1 </Text>
          </View>

          <Text style={Style.regText}> Find source of bleeding. </Text>

          <View style={Style.stepBorder}>
            <Text style={Style.stepText}> STEP 2 </Text>
          </View>

          <Text style={Style.regText}> Open clothing so that wound is visible. </Text>

          <View style={Style.stepBorder}>
            <Text style={Style.stepText}> STEP 3 </Text>
          </View>

          <Text style={Style.regText}> Identify life-threatening bleeding. </Text>
        </View>

        <View style={Style.questionBlock}>
          <View style={Style.doubleLineView}>
            <Text style={Style.subHeaderText}> IS A TRAUMA FIRST AID KIT AVAILABLE? </Text>
          </View>

          <View style={Style.yesNoBlock}>
            <TouchableHighlight
              style={Style.buttonShort}
              onPress={() => navigate("Wound")}>
              <View style={Style.buttonShort}>
                <Text style={Style.buttonText}> YES </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              style={Style.buttonShort}
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
