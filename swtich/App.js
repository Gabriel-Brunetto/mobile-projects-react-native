import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: false
    };
  }
  render(){

    const backgroundColor = this.state.status ? '#000' : '#fff';
    return (
    <View style={[styles.container, { backgroundColor }]}>
      
      <Switch
        value={this.state.status}
        onValueChange={(valueSwitch) => this.setState({status: valueSwitch})}      
      />

      <Text>{(this.state.status ? styles.on : styles.off)}</Text>
    </View>
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,              // ocupa tela inteira
    justifyContent: 'center',  // centraliza na vertical
    alignItems: 'center'  // centraliza na horizontal
  }
});
