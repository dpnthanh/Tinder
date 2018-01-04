import React from 'react'
import {
    View, StyleSheet,Image, TouchableOpacity
} from 'react-native'
export default class CreateGroupHeader extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.viewLeft}>
                    {/* <TouchableOpacity>
                        <Image
                            style={styles.imageLeft}
                            source={require('../../../public/images/home/headerLeft.png')}
                        />
                    </TouchableOpacity> */}
                </View>
                <View style={styles.viewCenter}>
                    <TouchableOpacity>
                        <Image
                            style={styles.imageCenter}
                            source={require('../../../public/images/createGroup/headerCenter.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewRight}>
                    <TouchableOpacity>
                        <Image
                            style={styles.imageRight}
                            source={require('../../../public/images/createGroup/headerRight.png')}
                        />
                    </TouchableOpacity>
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
        resizeMode: 'center'
    },
    imageCenter:{
        height:30,
        width: 300,
        resizeMode: 'center'

    },
    imageRight:{
        height:40,
        width:70,
        resizeMode: 'center'
    }

})