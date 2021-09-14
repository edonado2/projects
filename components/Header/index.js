import React from 'react';
import { View,Image} from 'react-native';
import styles from './styles';

const Header = ()=>{
    return(
    <View  style = {styles.Container}>
        <Image style =  {styles.Logo} source = {require('../../assets/images/logo.png')}/>
        <Image style =  {styles.Menu} source = {require('../../assets/images/menu.png')}/>    
    </View>
    )
} 

export default Header;