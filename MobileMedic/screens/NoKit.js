import React, {
  Component
} from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image,
} from 'react-native';

import Style from '../genStyle.js';

export default class NoKitScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View style={Style.mainView}>
        <View style={Style.doubleLineView}>
          <Text style={Style.headerText}> {"IF YOU DON'T HAVE A TRAUMA FIRST AID KIT"} </Text>
        </View>

        <View style={Style.stepImageBlock}>
          <View style={Style.oneStepBlock}>
            <View style={Style.stepBorder}>
              <Text style={Style.stepText}> Step 1 </Text>
            </View>

            <Text style={Style.regText}> Apply direct pressure on wound using clean cloth. </Text>
          </View>

          <View style={Style.imageViewSmall}>
            <Image
              source={require('../imgs/hand.png')}
              style={Style.image}
            />
          </View>
        </View>
      </View>
    )
  }
}
