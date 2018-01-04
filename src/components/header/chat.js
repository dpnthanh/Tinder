import React from 'react'
import {
    View, StyleSheet,Image, TouchableOpacity
} from 'react-native'
export default class ChatHeader extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.viewLeft}>
                    <TouchableOpacity>
                        <Image
                            style={styles.imageLeft}
                            source={require('../../../public/images/chat/headerLeft.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewCenter}>
                    <TouchableOpacity>
                        <Image
                            style={styles.imageCenter}
                            source={require('../../../public/images/chat/headerCenter.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewRight}>
                    {/* <TouchableOpacity>
                        <Image
                            style={styles.imageRight}
                            source={require('../../../public/images/createGroup/headerRight.png')}
                        />
                    </TouchableOpacity> */}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        height:50,
        flexDirection:'row',
        backgroundColor: '#ffffff'
    },
    viewLeft:{
        flex:1,
        justifyContent:'center'
    },
    viewCenter:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    viewRight:{
        flex:1,
        justifyContent:'center',
        alignItems: 'flex-end'

    },
    imageLeft:{
        height:40,
        width:50,
        resizeMode: 'contain'
    },
    imageCenter:{
        height:40,
        width: 40,
        resizeMode: 'contain'

    },
    imageRight:{
        height:50,
        width:50,
        resizeMode: 'center'
    }

})