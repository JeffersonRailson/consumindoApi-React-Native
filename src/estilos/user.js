import {StyleSheet} from 'react-native'



const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ddd',
        margin: 20,
        borderRadius: 10,
        flexDirection: 'row',
          
    },

    fotoUser: {
        borderRadius: 40,
        margin: 10,
        width: 50, 
        height: 50, 
    },
    viewTexto: {
        marginLeft: 10,
        backgroundColor: "#ddd",
        alignItems: 'baseline',
        flex: 1,
    },


    textNome:{
        fontSize: 15,
        textAlign: 'left'
        

    },

    textEmail:{
        fontSize: 15,
        textAlign: 'left'
    
    },

    icons:{
        marginRight: 20,
    }


}


)

export default styles;