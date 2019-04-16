import React, { Component } from 'react';
import {ScrollView, Text, TouchableOpacity, View } from 'react-native';
import api from '../../service/api'
import Users from '../../componentes/User'




export default class Main extends Component {
    state = {
        dadosUsers: [],
      };
    
      componentDidMount = async () => {
        const res = await api.get('');
        this.setState({ dadosUsers: res.data.results });
      };
    
    render() {
        const {dadosUsers} = this.state
        return (
            <View style={{flex: 1, backgroundColor: 'red'}} 
        >
        <ScrollView>

            {dadosUsers.map(dados =>(
                <TouchableOpacity key={dados.login.uuid} onPress={()=>(

                    this.props.navigation.navigate('detalhes', {
                      name: dados.name.first,
                      idade:dados.dob.age,
                      sexo: dados.gender,
                      endereco: dados.location.street,
                      cidade: dados.location.city,
                      uf: dados.location.state,
                      image: dados.picture.large,


                    }

                ))}>
                <Users key={dados.login.uuid}
                imaged={dados.picture.medium} 
                nome={dados.name.first} 
                email={dados.email} />
                

                </TouchableOpacity>
            ))}

        </ScrollView>

            </View>
        );
    }
}
