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

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View style={Style.mainView}>
        <View style={Style.homeBlockView}>
          <View style={Style.centered}>
            <Text style={Style.titleText}> MobileMedic </Text>

            <View style={Style.singleLineView}>
              <Text style={Style.subHeaderText}> SAVE A LIFE </Text>
            </View>

            <View style={Style.regTextView}>
              <Text style={Style.regText}> What everyone should know to stop bleeding after an injury. </Text>
            </View>
          </View>

          <View style={Style.centered}>
            <View style={Style.singleLineView}>
              <Text style={Style.subHeaderText}> ENSURE YOUR SAFETY </Text>
            </View>

            <View style={Style.regTextView}>
              <Text style={Style.regText}> Ensure the scene is safe. </Text>
              <Text style={Style.regText}> If you are threatened at any time, remove yourself from danger
                     and go to a safe location. {'\n'}</Text>
              <Text style={Style.regText}> Wear gloves if available. </Text>
            </View>
          </View>

          <View style={Style.centered}>
            <TouchableHighlight
              style={Style.buttonLong}
              onPress={() => navigate("IdentifyTrauma")}>
              <View style={Style.buttonLong}>
                <Text style={Style.buttonText}> CONTINUE, I AM SAFE </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
