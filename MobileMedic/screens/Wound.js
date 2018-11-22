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

export default class WoundScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View style={Style.mainView}>
        <View style={Style.singleLineView}>
          <Text style={Style.headerText}> WHERE IS THE WOUND? </Text>
        </View>

        <View style={Style.imageTextBlock}>
          <View style={Style.imageView}>
            <Image
              source={require('../imgs/body.png')}
              style={Style.image}
            />
          </View>

          <View style={Style.buttonBlock}>
            <TouchableHighlight
              style={Style.buttonShort}
              onPress={() => navigate("NoTourniquet")}>
              <View style={Style.buttonShort}>
                <Text style={Style.buttonText}> NECK </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              style={Style.buttonShort}
              onPress={() => navigate("NoTourniquet")}>
              <View style={Style.buttonShort}>
                <Text style={Style.buttonText}> SHOULDER </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              style={Style.buttonShort}
              onPress={() => navigate("Tourniquet")}>
              <View style={Style.buttonShort}>
                <Text style={Style.buttonText}> ARM </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              style={Style.buttonShort}
              onPress={() => navigate("NoTourniquet")}>
              <View style={Style.buttonShort}>
                <Text style={Style.buttonText}> GROIN </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              style={Style.buttonShort}
              onPress={() => navigate("Tourniquet")}>
              <View style={Style.buttonShort}>
                <Text style={Style.buttonText}> LEG </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
