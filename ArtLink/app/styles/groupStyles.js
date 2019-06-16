import { StyleSheet, Dimensions } from 'react-native';
//import { defaultStyles } from './defaultStyles';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const groupStyles = StyleSheet.create({
    container: {
        width: width,
        height: height- 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'

    },

    content: {
        width: width - 20,
        height: height - 40,
        flex: 1,
        justifyContent: 'space-between',
        
    },

    group: {
        height: '55%',
        marginTop: 20,
        paddingLeft: 15,
        justifyContent: 'flex-start',
    },

    group__content: {
        width: '100%',
        textAlign: 'left',
        marginBottom: 15,
        fontSize: 30,
        fontWeight: 'bold',
    },

    button: {
        width: '100%',
        marginBottom: 15,
    },

    button__top: {
        marginTop: 60
    },

    noMembers: {
        paddingVertical: 120,
        textAlign: 'center',
        color: '#666666'
    },

    name: {
        paddingLeft: 10,
        fontSize: 15,
    },

    member: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
    },

    picture: {
        width: 40,
        height: 40,
        borderRadius: 100,
    }
})

export default groupStyles;