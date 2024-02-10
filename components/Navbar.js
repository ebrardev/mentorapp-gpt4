import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
        <View  style= {styles.navContainer}>
        <Image   source={require('../assets/asistan.png')} style={{width: 50, height: 50}} />
      <Text style={styles.title}> Mentor Ai</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#031636',

    justifyContent: 'center',

    top:50,
    width:'100%',
    padding: 10,
    position:'absolute',

  },
    navContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
    textAlign:'left'
    
  },
});

export default Navbar;
