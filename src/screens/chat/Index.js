import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
} from 'react-native';
import styles from './Style';
import SBar from '../../components/statusBar/statusBar'
import PeopleMatches from '../../components/people chat/matches'
import Messages from '../../components/people chat/messages'
export default class Chat extends Component {
    constructor(props){
        super(props);
        this.state={
            onSearch:false,
            text:''
            
        };
        console.log('running');
        fetch('http://www.mocky.io/v2/5a4db736320000c2224325c5')
        .then((response) => response.json())
        .then((responseJson) => {
            list = responseJson;
            this.setState({list})
        })
        .catch((error) => {
        console.error(error);
        });
    }
    
    render() {
        return(
            <View style={styles.container} >
                <SBar/>
                <View style={styles.containerSearch}>
                    {!this.state.onSearch && 
                        <View style={styles.placeHoder}>
                            <Text>Search 1 Match</Text>
                        </View>
                    }
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid='#f0f0f0'
                        caretHidden={false}
                        onChangeText={(text) => {
                            this.setState({text});
                            this.setState({onSearch: text===''?false:true});
                        }}
                    />
                    
                    
                </View>
                <TitleBlock title='New Matches' number='5'/>
                <View>
                    <FlatList
                        horizontal={true}
                        data={this.state.list}
                        renderItem={({item})=><PeopleMatches 
                            image={item.image}
                            name={item.name}
                            />}
                    />
                </View>
                <TitleBlock title='Messages' number='1'/>
                <View style={styles.messContainer}>
                    <FlatList
                        horizontal={false}
                        data={this.state.list}
                        renderItem={({item})=><Messages
                            image={item.image}
                            name={item.name}
                            mess={item.mess}
                         />}
                    />
                </View>
            </View>
        );
    }
}

export class TitleBlock extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{
                marginLeft:15,
                flexDirection:'row'}}>
                <Text style={{
                    color: '#fe5068',
                    fontSize: 18
                }}>
                    {this.props.title}
                </Text>
                <View style={{
                        marginLeft:5,
                        backgroundColor: '#fe5068',
                        width:25,
                        height:25,
                        borderRadius:18,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                    <Text style={{
                        color:'#ffffff',
                        fontSize:16
                    }}>
                        {this.props.number}
                    </Text>
                </View>
            </View>
        );
    }
}