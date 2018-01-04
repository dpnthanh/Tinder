import { StyleSheet } from 'react-native';
import mStyle from '../../config/styles'
export default StyleSheet.create({
    container: {
        flex:1,
        paddingTop:0,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    containerSearch: {
        backgroundColor:'#f0f0f0',
        marginLeft:10,
        marginRight: 10,
        height:40,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    textInput:{
        marginLeft:10,
        marginRight: 10,
    },
    placeHoder:{
        position: 'absolute',
    },
    messContainer:{
        flex:1,
        
    }

})