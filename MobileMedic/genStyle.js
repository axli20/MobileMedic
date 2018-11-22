import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

var Style = StyleSheet.create({

  titleText: {
    fontSize: 38,
    color: '#a31109',
  },

  headerText: {
    fontSize: 24,
  },

  subHeaderText: {
    fontSize: 20,
  },

  regText: {
    fontSize: 14,
  },

  buttonText: {
    fontSize: 20,
    color: '#0a2cb2',
    textAlign: 'center',
  },

  buttonLong: {
    justifyContent: 'center',
    width: width*0.7,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 8,
  },

  buttonShort: {
    justifyContent: 'center',
    width: width*0.3,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 8,
  },

  stepBorder: {
    borderWidth: 1,
    justifyContent: 'center',
    width: width*0.25,
  },

  stepText: {
    fontSize: 20,
    textAlign: 'center',
  },

  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },

  imageView: {
    width: 150,
    height: 400,
    backgroundColor: 'white',
  },

  imageViewSmall: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
  },

});

export default Style;
