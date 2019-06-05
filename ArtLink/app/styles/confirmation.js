import { StyleSheet } from 'react-native';
import defaultStyles from './defaultStyles';

const confStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      ...defaultStyles.text,
      color: '#333',
      fontSize: 20,
    },
    code: {
      ...defaultStyles.text,
      color: '#333',
      fontSize: 36,
    },
    buttonContainer: {
      alignItems: 'center',
      backgroundColor: '#673AB7',
      borderRadius: 100,
      margin: 20,
      paddingVertical: 10,
      paddingHorizontal: 30,
    },
    button: {
      ...defaultStyles.text,
      color: '#FFFFFF',
      fontSize: 18,
    },
  });

  export default confStyles;