import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#E8F0F3',
        justifyContent: 'center',
        alignItems: 'center'
    },

    header: {
        fontSize: 55,
        fontFamily: 'Helvetica',
        color: '#BF0321',
    },

    headerSpace: {
        flex: 1.5,
    },

    titleSpace: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    footerSpace: {
        flex: 2,
    },

    titles: {
        fontSize: 30,
        color: 'black',
    },

    subheader: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },

    bodyText: {
        fontSize: 14,
        textAlign: 'center',
    },

    button: {
        width: 250,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    buttonText: {
        fontSize: 20,
        color: '#0902B1',
        fontWeight: 'bold',
    },

    buttonList: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

});

export default Style;
