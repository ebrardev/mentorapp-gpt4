import React from 'react';
import { View, StyleSheet } from 'react-native';

const Chatbox = () => {
  return (
    <View style={styles.container}>
      {/* Your chat content goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 flex: 1,
    backgroundColor: 'red',
    width:'100%',
  
    flexDirection:'row',
    top:100,
   
  },
});

export default Chatbox;
