import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import React from 'react'

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      alcool: '',
      gasolina: '',
      modalVisible: false,
      resultado: ''
    }

    this.calcular = this.calcular.bind(this);
  }

  calcular(){
    const alcool = parseFloat(this.state.alcool);
    const gasolina = parseFloat(this.state.gasolina);

    if(alcool / gasolina <= 0.7){
      this.setState({
        resultado: 'Compensa usar alcool',
        modalVisible: true
      })
    }else{
      this.setState({
      resultado: 'Compensa usar GASOLINA',
      modalVisible: true
      });
    }
  }

  render(){
    return (
        <View style={styles.container}>
          <View style={styles.areaTitle}>
            <Text style={styles.title}>Qual melhor opçao?</Text>
          </View>
          <View style={styles.areaInput}>
            <Text style={styles.label}>Alcool "preço por litro"</Text>
            <TextInput
              placeholder='Insira o valor'
              style={styles.textInput}
              keyboardType="numeric"
              value={this.state.alcool}
              onChangeText={(text) => this.setState({ alcool: text })}
            />
            <Text style={styles.label}>Gasolina "preço por litro"</Text>
            <TextInput
              placeholder='Insira o valor'
              style={styles.textInput}
              keyboardType="numeric"
              value={this.state.gasolina}
              onChangeText={(text) => this.setState({ gasolina: text })}
            />
          </View>
          <View style={styles.areaButton}>
            <TouchableOpacity style={styles.button} onPress={this.calcular}>
              <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
          </View>
          <Modal visible={this.state.modalVisible}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
              <View style={{ backgroundColor: '#FFF', padding: 30, borderRadius: 10 }}>
                <Text style={{ fontSize: 22 }}>{this.state.resultado}</Text>
                <TouchableOpacity
                  onPress={() => this.setState({ modalVisible: false })}
                  style={{ marginTop: 20 }}>
                  <Text style={{ color: 'red' }}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223232'
  },
  areaTitle: {
    marginTop: 90,
    alignItems: 'center',
  },
  title:{
    color: '#FFF',
    fontSize: 35
  },
  areaInput:{
    marginTop: 90,
    alignSelf: 'center',
  },
  label:{
    fontSize: 20,
    color: '#FFF',
    marginBottom: 10
  },  
  textInput: {
    width: 350,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 40,
    paddingLeft: 20,
  },
  areaButton:{
    alignSelf: 'center'
  },
  button:{
    backgroundColor: 'red',
    width: 350,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  }
});
