import React from 'react';
import Welcome from './Welcome.js'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
  render() {
  return (
    <View style={styles.container}>
    
        <Welcome/>

    
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
