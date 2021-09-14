import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    Container: {
        position: 'absolute',
        top: 50, 
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20
        
    },

    Logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain'

    },

    Menu: {
        width:25,
        height: 25,
        resizeMode: 'contain'
        

    },
})

export default styles;