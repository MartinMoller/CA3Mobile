import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class WelcomeScreen extends Component {
    static navigationOptions = {
      title: 'Welcome!',
    };
    
    render() {
      const { navigate } = this.props.navigation;
      let pic = {
        uri: 'http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG18.png'
      };
      return (
        <View style={styles.container}>
          <Image source={pic} style={styles.image} resizeMode="contain"/>
          <Text></Text>
          <Button
            title="View Star Wars Characters"
            onPress={() => navigate('Data')}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    text: { margin: 6, textAlign: 'center' },
    image: {
        flex:1, height: undefined, width: undefined
      }
});
