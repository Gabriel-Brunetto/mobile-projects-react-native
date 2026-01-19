import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {

  const [nome, setNome] = useState('');
  const [inputNome, setInputNome ] = useState('');
  const [inputAge, setInputAge ] = useState('');
  const [num, setNum] = useState('')

  //Component DidMount, inicializa quando abrimos a aplicacao
  useEffect(() => {
    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nomes')
      const ageStorage = await AsyncStorage.getItem('ages')
      if(nomeStorage !== null ) {
        setNome(nomeStorage)
      }
      if(ageStorage !== null){
        setNum(ageStorage)
      }
    }
    getStorage();
  }, [])


  //Component DidUpdate, altera dado com app aberto, update
  useEffect(() => {
    async function saveStorage(){
      await AsyncStorage.setItem('nomes', nome)
      await AsyncStorage.setItem('ages', num)
    }
    saveStorage()
  }, [nome, num])

  function alteraNome(){
    setNome(inputNome)
    setInputNome('')
  }

  function alteraAge(){
    setNum(inputAge)
    setInputAge('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{marginTop: 20}}
        placeholder='Your name'
        value={inputNome}
        onChangeText={(texto) => setInputNome(texto)}
      />

      <TextInput
        style={{marginTop: 20}}
        placeholder='Your Age'
        value={inputAge}
        onChangeText={(num) => setInputAge(num)}
      />
      <TouchableOpacity style={styles.areaBtn} onPress={alteraNome}>
        <Text style={styles.btnText}>Altera Nome</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.areaBtn} onPress={alteraAge}>
        <Text style={styles.btnText}>Altera Idade</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{nome}</Text>
      <Text style={styles.text}>{num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  text:{
    color: '#000',
    fontSize: 35,
    marginTop: 20,
    marginLeft: 20,
  },
  areaBtn:{
    width: '80%',
    alignSelf: 'center',
    height: 30,
    marginTop: 20,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
  },
  btnText:{
    color: '#FFF',
  },
});
