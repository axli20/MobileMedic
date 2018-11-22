import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

var Style = StyleSheet.create({

  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centered: {
    alignItems: 'center'
  },

  homeBlockView: {
    height: height*.6,
    justifyContent: 'space-evenly',
  },

  titleText: {
    fontSize: 38,
    color: '#a31109',
    textAlign: 'center',
  },

  headerText: {
    fontSize: 24,
    textAlign: 'center',
  },

  singleLineView: {
    width: width*0.7,
    height: 30,
    borderBottomWidth: 1,
    marginBottom: 10,
  },

  doubleLineView: {
    width: width*0.7,
    height: 62,
    borderBottomWidth: 1,
  },

  subHeaderText: {
    fontSize: 20,
    textAlign: 'center',
  },

  regText: {
    fontSize: 14,
    textAlign: 'center',
  },

  regTextView: {
    width: width*0.6,
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
    marginBottom: 3,
  },

  threeStepBlock: {
    height: height*0.35,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width*0.6,
  },

  twoStepBlock: {
    height: height*0.25,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width*0.6,
  },

  oneStepBlock: {
    height: height*0.15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width*0.6,
  },

  stepImageBlock: {
    height: height*0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  twoStepImageBlock: {
    height: height*0.60,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  },

  imageViewSmall: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 8,
  },

  buttonBlock: {
    height: height*0.45,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  yesNoBlock: {
    flexDirection: 'row',
    width: width*.7,
    justifyContent: 'space-evenly',
  },

  questionBlock: {
    flexDirection: 'column',
    height: 130,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  imageTextBlock: {
    flexDirection: 'row',
    width: width*0.8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

});

export default Style;
