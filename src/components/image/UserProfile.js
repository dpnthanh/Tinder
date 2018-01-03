import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import LocalImage from '../../components/image/LocalImage'
var widthP = 10;
export default class ProfileImage extends Component {
    
      
    render() {
        return(
            <View style={styles.container}>
                <LocalImage
                    source={require('../../../public/images/home/user.png')}
                    margin={10}
                />
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1, paddingLeft:10}}>
                        <Text style={styles.name}>Emily, 23</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <View style={{flex:1, alignItems:'center', flexDirection:'row'}}>
                            <Image source={require('../../../public/images/home/people.png')}/>
                            <Text style={{color: '#fe5068', fontSize:28, fontWeight:'100'}}>1</Text>
                        </View>
                        <View style={{flex:1, alignItems:'center', flexDirection:'row'}}>
                            <Image source={require('../../../public/images/home/book.png')}/>
                            <Text style={{color: '#cfcfcf', fontSize:28, fontWeight:'100'}}>2</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.textInfo}>Friend with Adreas Wells</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        alignItems:'stretch',
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    name:{
        color: '#424242',
        fontSize: 28
    },
    textInfo:{
        marginLeft: 10,
        marginBottom: 10,
        color: '#afafaf',
        fontSize: 16
    }

});