import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Lista from './src/Lista';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      feed: [
        {id: 1, nome: 'John', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imgperfil: 'https://picsum.photos/50/50', imgPublicacao: 'https://picsum.photos/200/300', likeada: false, likers: 10},
        {id: 2, nome: 'Mary', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imgperfil: 'https://picsum.photos/51/51', imgPublicacao: 'https://picsum.photos/201/301', likeada: false, likers: 10},
        {id: 3, nome: 'Peter', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imgperfil: 'https://picsum.photos/52/52', imgPublicacao: 'https://picsum.photos/202/302', likeada: false, likers: 0},
        {id: 4, nome: 'Anna', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imgperfil: 'https://picsum.photos/53/53', imgPublicacao: 'https://picsum.photos/203/303', likeada: false, likers: 10},
        {id: 5, nome: 'Steve', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imgperfil: 'https://picsum.photos/54/54', imgPublicacao: 'https://picsum.photos/204/304', likeada: false, likers: 0},
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
            source={require('./src/img/logo.jpeg')}
            style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
            source={require('./src/img/send.jpeg')}
            style={styles.send}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem = {({item}) => <Lista data={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    marginTop: 30,
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    borderBottomColor: '#ccc',
    padding: 10
  },
  logo:{
    height: 30,
    width: 100,
  },
  send:{
    width: 23,
    height: 23,
  }  
});
