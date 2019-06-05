import { StyleSheet } from 'react-native'

const museaStyles = StyleSheet.create({
    container: {
      paddingTop: 20,         // start below status bar
      backgroundColor: '#EEEEEE'
    },
    scrollContent: {
      flexDirection: 'row',   // arrange logos in rows
      flexWrap: 'wrap',       // allow multiple rows
    },
  });

  export default museaStyles;