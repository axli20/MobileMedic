import React, {
  Component
} from 'react';

import {
  AppRegistry,
  Button,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

class MyHomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <TouchableHighlight
                          onPress={() => this.props.navigation.navigate('Photos')}>
            <Text>CONTINUE, I AM SAFE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class PhotosScreen extends React.Component {
  render() {
    return (
      <Text>Photos</Text>
    );
  }
}



const AwesomeProject = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },

  Photos: {
    screen: PhotosScreen,
  },
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
