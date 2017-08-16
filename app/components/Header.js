import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      
      <Image style={styles.headerBackground} source={require('../img/forest-patrol.jpg')}>

        <View style={styles.header}>

          <View style={styles.profpicWrap}>
            <Image style={styles.profpic} source={require('../img/me.png')} />
          </View>

          <Text style={styles.name}>Abdurrahman Al Hanif</Text>
          <Text style={styles.pos}>Junior Developer</Text>
        
        </View>

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  profpicWrap: {
    width: 100, 
    height: 100,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 10
  },
  profpic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 2
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  pos: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '300',
    fontStyle: 'italic'
  }
});

AppRegistry.registerComponent('ProfilePage', () => ProfilePage);
