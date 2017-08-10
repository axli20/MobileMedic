//Domigo Style Sheet
import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
      flex: 1,
      padding: 25,
    },

    //DomiGO
    label: {
      color: '#0D6A98',
      fontWeight: 'bold',
      fontSize: 28,
      textAlign: 'center',
      padding: 20,
    },

    //Spacing for Maps, Deliveries, and New
    header: {
      flex: 0.05,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },

    //Text Style for Maps, Deliveries, and New
    headerText: {
      color: '#0D6A98',
      fontSize: 22,
    },

    sliver: {
      flex: 0.05,
    },

    list: {
      flex: 8,
      flexDirection: 'column',
      borderWidth: 1,
      borderColor: '#0D6A98',
      padding: 5,
    },

    deliveryButtonPanel: {
      height: 80,
      borderColor: '#64696D',
      borderWidth: 1,
      padding: 3,
    },

    nameAndTime: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
});

export default Style;
