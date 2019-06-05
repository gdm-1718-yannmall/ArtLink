import { StyleSheet, Dimensions } from 'react-native';
//import { defaultStyles } from './defaultStyles';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many cards we want to have in each row and column
const cols = 1, rows = 2;

const cardStyles = StyleSheet.create({
    container: {
        //marginLeft: 5,
        //marginBottom: 10,
        marginTop: 10,
        height: (height - 10 - 10) / rows,
        width: width,
    },
    cardContainer: {
        flex: 1,                          // take up all available space
        ...StyleSheet.absoluteFillObject,
    },
    card:{
        width: width - 20,
        height: (height - 10 - 10) / 2,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity:0.5,
        alignSelf: 'center',
      },
    // image: {
    //     borderRadius: 5,                 // rounded corners
    //     ...StyleSheet.absoluteFillObject, // fill up all space in a container
        
    // },

    image: {
        //flex: 1,
        aspectRatio: 1.5, 
        resizeMode: 'contain',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 4,
        marginLeft: 5, 
    },
    adres: {
        color: '#BBBBBB',
        fontSize: 18,
        lineHeight: 20,
        marginLeft: 5,
        marginTop: 5,
    },
    description: {
        fontSize: 18,
        lineHeight: 25,
        margin: 5,
    },
  });

  export default cardStyles;