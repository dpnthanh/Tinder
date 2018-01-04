import { StyleSheet } from 'react-native';
import mStyle from '../../config/styles'
export default StyleSheet.create({
    container: {
        flex:1,
        paddingTop:10,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    nameGroup:{
        marginTop:20,
        alignSelf:'center',
        fontSize: 20,
        color:'#474747'
    },
    settingsContainer:{
        flexDirection:'row',
        marginTop:20
    },
    settingSmallContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textSettings:{
        fontSize:20,
        color: '#fd5068'
    },
    footer:{
        flex:1,
        justifyContent:'flex-end'
    },
    backgroundImage:{
        zIndex:-5,
        height:275,
        width:null,

    },
    icon:{
        width: 65,
        height: 65,
    },
    iconCenter:{
        alignSelf: 'center',
        position: 'absolute',
        top:30
    },
    iconLeft:{
        left:30,
        position: 'absolute',
        top:10
    },
    iconRight:{
        right:30,
        position: 'absolute',
        top:10
    }, textStyleOne:{
        alignSelf: 'center',
        position: 'absolute',
        top: 115,
        fontSize: 20,
        color: '#474747'
    }, textStyleTwo:{
        alignSelf: 'center',
        position: 'absolute',
        top: 140,
        fontSize: 14,
        color: '#6c6c6d'
    },
    linearGradient: {
        position: 'absolute',
        top:190,
        alignSelf:'center',
        height:70,
        paddingTop: 13,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 35
      },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
      },

})