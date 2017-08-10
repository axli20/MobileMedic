//Domigo Working Version

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
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

import Style from './DomigoStyle.js';
import MapScreen from './MapScreen.js';
import DeliveryScreen from './DeliveryScreen.js';
import NewDeliveryScreen from './NewDeliveryScreen.js';
import DeliveryButton from './DeliveryButton.js';

//Array from which to pull data (will be replaced by database/OCR eventually)
//[firstName, lastName, time, phone, price, items, address]
const data = [
    ['John', 'Smith', '9:06 PM', '(440) 123-4567', '10.25', 2, '11 Webster Ave, Hanover, NH 03755'],
    ['Jane', 'Doe', '9:17 PM', '(440) 123-4567', '10.25', 2, '11 Webster Ave, Hanover, CA 03755'],
    ['Sean', 'Cann', '9:25 PM', '(440) 123-4567', '10.25', 4, '11 Webster Ave, Hanover, NB 03755'],
    ['Tyler', 'Fisher', '9:31 PM', '(440) 123-4567', '10.25', 2, '11 Webster Ave, Hanover, NH 03755'],
    ['Jane', 'Doe', '9:06 PM', '(440) 123-4567', '10.25', 2, '11 Webster Ave, Hanover, IDK 03755'],
    ['Jane', 'Doe', '9:06 PM', '(440) 123-4567', '10.25', 2, '11 Webster Ave, Hanover, NH 03755'],
    ['Jane', 'Doe', '9:06 PM', '(440) 123-4567', '10.25', 2, '11 Webster Ave, Hanover, NH 03755'],
    ['Jane', 'Doe', '9:06 PM', '(440) 123-4567', '10.25', 2, '11 Webster Ave, Hanover, WT 03755'],
    ['Jane', 'Doe', '9:06 PM', '(440) 123-4567', '10.25', 2, '11 Webster Ave, Hanover, EV 03755'],
];

//The Home Screen
class HomeScreen extends React.Component {

  //Function that renders the list view of deliveries
  _renderDeliveryButtons(){
    let views = [];

    for(var r = 0; r < data.length; r++){
        let row = data[r];

        views.push(
          <DeliveryButton
              firstName={row[0]}
              lastName={row[1]}
              time={row[2]}
              phone={row[3]}
              price={row[4]}
              items={row[5]}
              address={row[6]}
              key={r}
              onPress={() => this.props.navigation.navigate('Delivery', { firstName: row[0], lastName: row[1], time: row[2], phone: row[3], price: row[4], items: row[5], address: row[6] })}/>
        );
    }

    return views;
  }

  _getAddresses(){
    let addresses = [];
    for(var r = 0; r < data.length; r++){
        let row = data[r];

        addresses.push(
          <Text key={r}>{row[6]}</Text>
        );
    }

    return addresses;
  }

  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Map', { addressList: this._getAddresses() })}>
            <Text style={Style.headerText}>Map</Text>
          </TouchableOpacity>

          <Text style={Style.headerText}>Deliveries</Text>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('NewDelivery')}>
            <Text style={Style.headerText}>New</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={Style.list}>
          {this._renderDeliveryButtons()}
        </ScrollView>
      </View>
    );
  }
}

//Stack Navigator, controls page switching and header bar
const DomigoNavigator = StackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'DomiGO',
        //header: <Text style={Style.label}>DomiGO</Text>
      }),
    },

    Map: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'DomiGO',
        //header: <Text style={Style.label}>DomiGO</Text>
      }),
    },

    Delivery: {
      screen: DeliveryScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'DomiGO',
        //header: <Text style={Style.label}>DomiGO</Text>
      }),
    },

    NewDelivery: {
      screen: NewDeliveryScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'DomiGO',
        //header: <Text style={Style.label}>DomiGO</Text>
      }),
    },
});

AppRegistry.registerComponent('AwesomeProject', () => DomigoNavigator);
