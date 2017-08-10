DomiGO

_______________________________________________________________________________________________

TO RUN THE APP:

**Option A (Creating a New Project)**:

1. Create a new react native project using

    react-native init yourProjectName
    cd yourProjectName
    npm install --save react-navigation //this installs the react navigation library

2. Copy the entire folder 'domigo' (found in this Google Drive folder) into your project folder

3. Go into 'index.ios.js' and 'index.android.js', delete contents, and paste code:

    import yourProjectName from './domigo/Domigo';

4. Go to domigo > Domigo.js, scroll to the bottom and you will see:

    AppRegistry.registerComponent('AwesomeProject', () => DomigoNavigator);

   Replace 'AwesomeProject' with 'yourProjectName'

5. Run the simulator as usual.

**Option B (Import into Existing Project)**:

1. Install the react navigation library first:

    cd yourProjectName
    npm install --save react-navigation //this installs the react navigation library

2. Copy the entire folder 'domigo' (found in this Google Drive folder) into your project folder

3. Go into 'index.ios.js' and 'index.android.js', delete contents, and paste code:

    import yourProjectName from './domigo/Domigo';

4. Go to domigo > Domigo.js, scroll to the bottom and you will see:

    AppRegistry.registerComponent('AwesomeProject', () => DomigoNavigator);

   Replace 'AwesomeProject' with 'yourProjectName'

5. Run the simulator as usual.

_______________________________________________________________________________________________

APP OVERVIEW:

**Screens**

1. HomeScreen
2. DeliveryScreen
3. NewDeliveryScreen
4. MapScreen

**Other Components**

1. DeliveryButton

_______________________________________________________________________________________________

SCREEN DETAILS:

**HomeScreen**:

Contents:

1. Header: "Map Deliveries New", in which "Map" and "New" are Touchables
   that navigate to the respective MapScreen and NewDeliveryScreen.
   (Code in Domigo.js, class HomeScreen, <View style={Style.header})

2. ScrollView: Contains a list of DeliveryButton components, which navigate to
   their respective DeliveryScreen. The DeliveryButton components are rendered using
   data from 'const data' and the function _renderDeliveryButtons().
   (Code in Domigo.js, class HomeScreen, <ScrollView>)

**DeliveryScreen**:

Contents: To be developed.
(Code in DeliveryScreen.js)

Navigation Params: The data for each different delivery is passed through navigation params:

  onPress={() => this.props.navigation.navigate('Delivery', {data: 'all the data here'})}
  (Code in Domigo.js, class HomeScreen, _renderDeliveryButtons() { ... onPress= ...})

**NewDeliveryScreen**:

Contents: To be developed.
(Code in NewDeliveryScreen.js)

**MapScreen**:

Contents: To be developed.
(Code in MapScreen.js)

_______________________________________________________________________________________________

COMPONENT DETAILS:

**DeliveryButton**:

Contents: The DeliveryButton class renders a TouchableHighlight that contains data
          passed through props. The onPress function is also a prop, which is set to
          a function (.navigate()) in _renderDeliveryButtons().

(Code in DeliveryButton.js)

_______________________________________________________________________________________________

Suggestions and Comments:
