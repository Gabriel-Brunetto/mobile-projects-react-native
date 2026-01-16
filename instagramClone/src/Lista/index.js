import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default class Lista extends React.Component {
constructor(props){
    super(props);
    this.state = {
        feed: this.props.data
    }

    this.mostraLikes = this.mostraLikes.bind(this);
    this.like = this.like.bind(this);
    this.carregaIcone = this.carregaIcone.bind(this);
}

carregaIcone(likeada){
    return likeada ? require('../img/liked.jpeg') : require('../img/like.jpeg');
}

like(){
    let feed = this.state.feed;

    if(feed.likeada == true){
        this.setState({
            feed: {
                ...feed,
                likeada: false,
                likers: feed.likers - 1
            }
        });
    } else {
        this.setState({
            feed: {
                ...feed,
                likeada: true,
                likers: feed.likers + 1
            }
        });
    }
}
mostraLikes(likers){
    let feed = this.state.feed;
    if(feed.likers <= 0){
        return;
    }
    
    return(
        <Text style={{fontWeight: 'bold', marginLeft: 5}}>
            {feed.likers} {feed.likers > 1 ? 'likes' : 'like'}
        </Text>
    );
}


render(){
    return(
        <View style={styles.areaFeed}>                
            <View style={styles.viewPerfil}>
                <Image
                    source={{uri: this.state.feed.imgperfil}}
                    style={styles.imgPerfil}
                />
                <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
            </View>
            <Image
                resizeMode="cover"
                source={{uri: this.state.feed.imgPublicacao}}
                style={styles.imgPublicacao}
            />

            <View style={styles.areaBTN}>
                <TouchableOpacity onPress={this.like}>
                    <Image
                        source={this.carregaIcone(this.state.feed.likeada)}
                        style={styles.iconButton}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../img/send.jpeg')}
                        style={styles.iconButton}
                    />
                </TouchableOpacity>
            </View>

            {this.mostraLikes(this.state.feed.likers)}

            <View style={styles.areaRodape}>
                <Text style={styles.nomeRodape}>
                    {this.state.feed.nome}
                </Text>

                <Text style={styles.descRodape}>
                    {this.state.feed.descricao}
                </Text>
            </View>
        </View>
    );
}}

const styles = StyleSheet.create({
    areaFeed:{
        marginBottom: 20,
    },
    viewPerfil:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    imgPerfil:{
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    nomeUsuario:{
        marginLeft: 5,
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
    },
    imgPublicacao:{
        width: '100%',
        height: 400,
    },
    iconButton:{
        width: 25,
        height: 25,
        marginLeft: 8,
        marginTop: 8,
    },
    areaBTN:{
        flexDirection: 'row',
        padding: 5,
    },
    iconButton:{
        width: 25,
        height: 25,
        marginLeft: 8,
        marginTop: 8,
    },
    areaRodape:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
    },
    nomeRodape:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    descRodape:{
        marginLeft: 5,
        fontSize: 16,
    }
});