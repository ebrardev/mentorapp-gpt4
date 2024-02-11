import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import Chatbox from './components/Chatbox';

export default function App() {
  return (
    <View style={styles.container}>
    
      <StatusBar style="auto" />
      <Navbar />
    <Chatbox  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:1,
  },
});
