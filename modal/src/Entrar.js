import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import React from 'react';

export default class Entrar extends React.Component{

  render(){
    return (
      <View style={{backgroundColor: '#292929', width: '100%', borderRadius:15,
       height:350}}>
        <Text style={{color: '#FFF', fontSize: 28, textAlign:'center'}}>Welcome</Text>
        <Button title='Sair' onPress={this.props.fechar}/>
      </View>
    );
  }
}

