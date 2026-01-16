import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      input: '',
      nome: [],
    }
    this.gravaNome = this.gravaNome.bind(this)
  }

  //ComponentDidMount - Quando o componente é montado em tela
  async componentDidMount(){
      const value = await AsyncStorage.getItem('nome');
      if(value !== null) {
        this.setState({nome: JSON.parse(value)})
      }
  }

  //ComponentDidUpdate - toda vez que um state é atualizado fazer algo
  async componentDidUpdate(_, prevState){
    if(prevState.nome !== this.state.nome){
        await AsyncStorage.setItem('nome', JSON.stringify(this.state.nome))
    }
  }

    gravaNome(){
      if(this.state.input === '') return;

      this.setState({
        nome: [...this.state.nome, this.state.input],
        input: ''
      });
    }

  render(){
      return (
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput
            placeholder='Escreva um item para adicionar'
            style={styles.input}
            value={this.state.input}
            onChangeText={(text) => this.setState({input: text})}
            underlineColorAndroid= "transparent"
          />
        </View>

        {this.state.nome.map((item, index) => (
        <Text key={index} style={styles.nome}>
          {item}
        </Text>
      ))}

        <View style={styles.botaoContainer}>
          <TouchableOpacity onPress={this.gravaNome}>
            <Text style={styles.botao}>Adicionar A Lista</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 350,
    height: 40,
    borderColor: '#000',
    marginTop: 70,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20
  },
  botaoContainer:{
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center'
  },
  botao:{
    backgroundColor: 'green',
    color: '#FFF',
    width: 300,
    height: 40,
    borderRadius: 20,
    padding: 10,
    textAlign: 'center',
    overflow: 'hidden'
  },
  nome:{
    marginTop: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    fontSize: 30,
    textAlign: 'center'
  }
});
