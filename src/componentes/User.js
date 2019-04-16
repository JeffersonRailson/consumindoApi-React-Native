import React, { Component } from "react";
import { Text, Image, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import styles  from '../estilos/user'


export default class Users extends Component {
  render() {
    return (
      <View style={styles.conteiner}>
        <Image source={{uri: this.props.imaged}} style={styles.fotoUser} />
        <View style={styles.viewTexto} >

        <Text style={styles.textNome} > {this.props.nome}</Text>
        <Text style={styles.textEmail} > {this.props.email}</Text>
        </View>
        <Icon style={styles.icons} name="angle-right" size={20}/>
      </View>
    );
  }
}
