import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native'
export default class ReactionDock extends React.Component{
    render(){
        return(
            <View style={styles.container}>                
            {/* <Text>sadfsd</Text> */}
                <Image style={styles.reactionButton} 
                 source={require('../../../public/images/home/btn1.png')}/>
                 <Image style={styles.reactionButton} 
                 source={require('../../../public/images/home/btn2.png')}/>
                 <Image style={styles.reactionButton} 
                 source={require('../../../public/images/home/btn3.png')}/>
                 <Image style={styles.reactionButton} 
                 source={require('../../../public/images/home/btn4.png')}/>
                 <Image style={styles.reactionButton} 
                 source={require('../../../public/images/home/btn5.png')}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent:'center',
        // backgroundColor: '#ff00ff',
        flexDirection:'row'
    },
    reactionButton: {
        // flex:1,
        marginLeft: 10,
        marginRight: 10,
        height:50,
        width: 50
    }
})