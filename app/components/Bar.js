import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Bar extends Component {
  render() {
    return (
      
      <View style={styles.bar}>
        

        <View style={[styles.barItem, styles.barSeparator]}>
          <Text style={styles.barTop}>Followers</Text>
          <Text style={styles.barBottom}>354k</Text>
        </View>

        <View style={styles.barItem}>
          <Text style={styles.barTop}>Following</Text>
          <Text style={styles.barBottom}>313</Text>
        </View>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#222',
    flexDirection: 'row'
  },
  barItem: {
    flex: 1,
    padding: 18,
    alignItems: 'center'
  },
  barSeparator: {
    borderRightColor: '#141414',
    borderRightWidth: 1
  },
  barTop: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  barBottom: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    fontStyle: 'italic'
  }
});
