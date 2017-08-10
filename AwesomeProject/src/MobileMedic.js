//MobileMedic

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  TouchableHighlight,
  Button,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Style from './Style';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Mobile Medic',
  };

  render() {
    return (
      <View style={Style.rootContainer}>
        <Text style={Style.header}>MobileMedic</Text>
        <Text style={Style.subheader}>SAVE A LIFE</Text>
        <Text>___________________________________________________{'\n'}</Text>

        <Text style={Style.bodyText}>What everyone should know to {'\n'}
              stop bleeding after an injury{'\n\n'}</Text>

        <Text style={Style.subheader}>ENSURE YOUR SAFETY</Text>
        <Text>___________________________________________________{'\n'}</Text>

        <Text style={Style.bodyText}>Ensure the scene is safe.{'\n'}</Text>

        <Text style={Style.bodyText}>
              If you are threatened at any time,{'\n'}
              remove yourself from danger and{'\n'}
              go to a safe location.{'\n'}
        </Text>

        <Text style={Style.bodyText}>Wear gloves if available.{'\n'}{'\n'}</Text>
        <TouchableHighlight style={Style.button}
                            onPress={() => this.props.navigation.navigate('IdentifyTrauma')}>
          <Text style={Style.buttonText}>CONTINUE, I AM SAFE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class IdentifyTraumaScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={Style.rootContainer}>
        <View style={Style.headerSpace}>
        </View>

        <View style={Style.titleSpace}>
          <Text style={Style.titles}>IDENTIFY TRAUMA</Text>
          <Text>___________________________________________________</Text>
        </View>

        <View style={Style.buttonList}>
          <TouchableHighlight style={Style.button}
                              onPress={() => navigate('Trauma', { category: 'Bleeding' })}>
              <Text style={Style.buttonText}>BLEEDING</Text>
          </TouchableHighlight>

          <TouchableHighlight style={Style.button}
                              onPress={() => navigate('Trauma', { category: 'Unconsciousness' })}>
              <Text style={Style.buttonText}>UNCONCIOUSNESS</Text>
          </TouchableHighlight>

          <TouchableHighlight style={Style.button}
                              onPress={() => navigate('Trauma', { category: 'Severed Limb' })}>
              <Text style={Style.buttonText}>SEVERED LIMB</Text>
          </TouchableHighlight>

          <TouchableHighlight style={Style.button}
                              onPress={() => navigate('Trauma', { category: 'Dazed/Confusion' })}>
              <Text style={Style.buttonText}>DAZED/CONFUSION</Text>
          </TouchableHighlight>

          <TouchableHighlight style={Style.button}
                              onPress={() => navigate('Trauma', { category: 'Other' })}>
              <Text style={Style.buttonText}>OTHER</Text>
          </TouchableHighlight>
        </View>

        <View style={Style.footerSpace}>
        </View>
      </View>
    );
  }
}

class TraumaScreen extends React.Component {

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text> { params.category } stuff</Text>
      </View>
    );
  }
}

const AwesomeProject = StackNavigator({
    Home: {
      screen: HomeScreen,
    },

    IdentifyTrauma: {
      screen: IdentifyTraumaScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Identify Trauma',
        headerRight: (
          <Button
            title={'Home'}
            onPress={() => navigation.navigate('Home')}
          />
        )
      }),
    },

    Trauma: {
      screen: TraumaScreen,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.category,
        headerRight: (
          <Button
            title={'Home'}
            onPress={() => navigation.navigate('Home')}
          />
        )
      }),
    },
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
