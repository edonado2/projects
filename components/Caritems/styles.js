import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({

    carContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
    
      headline: {
        fontSize: 40,
        fontWeight: 'bold',
      },
    
      subtitle: {
        fontSize: 16,
        color: '#5c5e62',
    
      },

      subtitleCTA: {
        textDecorationLine: 'underline'
      },
    
      image: {
        width: Dimensions.get('window').width,
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },

      buttonsContainer: {

        position: 'absolute',
        bottom: 50,
        width: '100%'

      }
})

export default styles;