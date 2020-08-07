import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#8257E5'
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160, 
        marginVertical: 40,
        marginLeft: 20
    }
});

export default styles;