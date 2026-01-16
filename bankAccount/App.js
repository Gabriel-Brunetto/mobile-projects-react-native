import { StatusBar } from 'expo-status-bar';
import {Picker} from '@react-native-picker/picker';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      accountNumber: '',
      age: '',
      genderList: [
        {key: 1, nome: 'Male' },
        {key: 2, nome: 'Female' },
        {key: 3, nome: 'Other' },
      ],
      selectedGender: 1,
      valor: 0,
      valorMax: 100,
      status: false
    }
  };
    
  render() {

    let genderItem = this.state.genderList.map( (v,k ) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })

    return (
      <View style={styles.container}>
        <View style={styles.areaTitle}>
          <Text style={styles.title}>Bank Account App</Text>
        </View>
      <View style={styles.areaTextInput}>
        <TextInput 
          style={styles.input}
          placeholder="Account Number"
          onChangeText={(text) => this.setState({accountNumber: text})}
          value={this.state.accountNumber}
        />
        <TextInput 
          style={styles.input}
          placeholder="Idade"
          onChangeText={(text) => this.setState({age: text})}
          value={this.state.age}
          keyboardType="numeric"
        />
        <View>
          <Picker
            selectedValue={this.state.selectedGender}
            onValueChange={(itemValue, itemIndex) => this.setState({selectedGender: itemValue})}
          >
            {genderItem}
          </Picker>
          <Slider
            minimumValue={0}
            maximumValue={this.state.valorMax}
            onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})}// atualiza o valor
            value={this.state.valor.toFixed(0)} // valor inicial
            style={{width: '100%'}}
          />
          <Switch
            value={this.state.status}
            onValueChange={(valueSwitch) => this.setState({status: valueSwitch})}
          />         
        </View>
        <View style={{marginTop: 20}}>
          <Text>Conta: {this.state.accountNumber}</Text>
          <Text>Idade: {this.state.age}</Text>
          <Text>Gênero: {this.state.genderList[this.state.selectedGender].nome}</Text>
          <Text>Saldo: R$ {this.state.valor.toFixed(2)}</Text>
          <Text>É estudante?</Text>
          <Text>Status: {this.state.status ? 'Sim' : 'Nao'}</Text>
        </View>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  areaTitle: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },  
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  areaTextInput: {
    marginTop: 40,
    paddingHorizontal: 20
  },
  input: {
    marginBottom: 20,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5
  }
});
