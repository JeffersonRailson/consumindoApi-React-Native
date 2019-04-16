import React, { Component } from 'react';

import {
  View, Button, Text, Image,
} from 'react-native';

export default class Detalhes extends Component {
  state = {
    refreshing: false,
  };

  render() {
    const { navigation, user } = this.props;
    const nome = navigation.getParam('name', 'NO-NAME');
    const idade = navigation.getParam('idade', 'NO-AGE');
    const sexo = navigation.getParam('sexo', 'NO-SEX');
    const endereco = navigation.getParam('endereco', 'NO-ADDRESS');
    const cidade = navigation.getParam('cidade', 'NO-CITY');
    const uf = navigation.getParam('uf', 'NO-UF');
    const image = navigation.getParam('image', '');

    return (
      <View style={{ flex: 1, backgroundColor: 'red',
       justifyContent: 'center', alignItems: 'center' }}>
       <View style={{backgroundColor: "#ddd", margin: 20}}>
       <View style={{margin: 20, alignItems: 'center'}}  >
        <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 40, }} />
        <Text style={{ fontSize: 24, textTransform: 'capitalize' }}>
          Nome:
          {nome}
        </Text>
        <Text style={{ fontSize: 24, textTransform: 'capitalize' }}>
          Idade:
          {idade}
        </Text>
        <Text style={{ fontSize: 24, textTransform: 'capitalize' }}>
          Sexo:
          {sexo}
        </Text>
        <Text style={{ fontSize: 24, textTransform: 'capitalize' }}>
          End:
          {endereco}
        </Text>
        <Text style={{ fontSize: 24, textTransform: 'capitalize' }}>
          Cidade:
          {cidade}
        </Text>
        <Text style={{ fontSize: 24, textTransform: 'capitalize' }}>
          UF:
          {uf}
        </Text>
        </View>
        </View>
        <Button style={{margin: 20}} title="Voltar" onPress={() => this.props.navigation.navigate('principal')} />
      </View>
    );
  }
}