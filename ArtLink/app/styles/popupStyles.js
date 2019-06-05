import { StyleSheet, Dimensions } from 'react-native';
import defaultStyles from './defaultStyles';

const popupStyles = StyleSheet.create({
    // Main container
  container: {
    ...StyleSheet.absoluteFillObject,   // fill up all screen
    justifyContent: 'flex-end',         // align popup at the bottom
    backgroundColor: 'transparent',     // transparent background
  },
  // Semi-transparent background below popup
  backdrop: {
    ...StyleSheet.absoluteFillObject,   // fill up all screen
    backgroundColor: 'black',
  },
  // Popup
  modal: {
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    margin: 20,
    marginBottom: 0,
  },
  // Movie container
  museumContainer: {
    flex: 1,                            // take up all available space
    marginBottom: 0,
  },
  imageContainer: {
    flex: 1,                            // take up all available space
  },
  image: {
        //flex: 1,
        aspectRatio: 1.5, 
        resizeMode: 'contain',
    },
  museumInfo: {
    backgroundColor: 'transparent',
  },
  title: {
    ...defaultStyles.text,
    fontSize: 20,
  },
  adres: {
    ...defaultStyles.text,
    color: '#BBBBBB',
    fontSize: 14,
  },
  sectionHeader: {
    ...defaultStyles.text,
    color: '#AAAAAA',
  },
  // Footer
  footer: {
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: '#673AB7',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  button: {
    ...defaultStyles.text,
    color: '#FFFFFF',
    fontSize: 18,
  },

  // options
  optionContainer: {
    alignItems: 'center',
    borderColor: 'rgba(103, 58, 183, 1)',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },

  //content
  description: {
    ...defaultStyles.text,
    textAlign: 'justify',
    fontSize: 17,

  },
});

export default popupStyles;