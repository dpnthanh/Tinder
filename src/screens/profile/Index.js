import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';
import styles from './Styles';
import ProfileImage from '../../components/image/UserProfile';

import ReactionDock from '../../components/reactionDock/reactionDock'
export default class ProfileScreen extends Component {
    
    constructor(props){
        super(props)
        this.state={
            pos:0,
            list:[
                {
                    "key":1,
                    "name": "Thanh",
                "age": "20",
                "people": "3",
                "book": "1",
                "friend":"dang pham",
                    "mess":"hey boy!",
                    "image":"https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/25354046_882347548593313_599674933686051678_n.jpg?oh=87a51b075883b4f5b8f061a62e10dd8d&oe=5AF4DE3B"
                },
                {
                    "key":2,
                    "name": "Đặng",
                "age": "24",
                "people": "2",
                "book": "0",
                "friend":"Nhat Thanh",
                "mess": "Lâu rồi không gặp",
                    "image":"https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/26166134_1230371220429223_5412730758134142451_n.jpg?oh=5b7a843c6b9a3ff6677c5132da53e8d6&oe=5AEE740E"
                },
                {
                    "key":3,
                    "name": "TayLor",
                "age": "26",
                "people": "5",
                "book": "3",
                "friend":"Ed Sheeran",
                "mess": "hello can't I help You",
                    "image":"http://turitmo.com/wp-content/uploads/2017/12/Taylor-Swift-revenge-nerds.jpg"
                },
                {
                    "key":4,
                    "name": "Ms.Taylor",
                "age": "27",
                "people": "1",
                "book": "0",
                "friend":"Nhat Thanh",
                "mess": "Hi There",
                    "image":"http://www.khartoumpost.net/wp-content/uploads/2017/08/%D8%AA%D9%8A%D9%84%D9%88%D8%B1-%D8%B3%D9%88%D9%8A%D9%81%D8%AA.jpg"
                },
                {
                    "key":5,
                    "name": "Beauty Girl",
                "age": "20",
                "people": "3",
                "book": "1",
                "friend":"dang pham",
                "mess": "Xin Chào! làm quen nhé",
                    "image":"http://cdn.cnn.com/cnnnext/dam/assets/170805094558-02-taylor-swift-lead-image-exlarge-169.jpg"
                },{
                    "key":6,
                    "name": "Thanh",
                "age": "20",
                "people": "3",
                "book": "1",
                "friend":"dang pham",
                    "mess":"hey boy!",
                    "image":"https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/25354046_882347548593313_599674933686051678_n.jpg?oh=87a51b075883b4f5b8f061a62e10dd8d&oe=5AF4DE3B"
                },
                {
                    "key":7,
                    "name": "Đặng",
                "age": "24",
                "people": "2",
                "book": "0",
                "friend":"Nhat Thanh",
                "mess": "Lâu rồi không gặp",
                    "image":"https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/26166134_1230371220429223_5412730758134142451_n.jpg?oh=5b7a843c6b9a3ff6677c5132da53e8d6&oe=5AEE740E"
                },
                {
                    "key":8,
                    "name": "TayLor",
                "age": "26",
                "people": "5",
                "book": "3",
                "friend":"Ed Sheeran",
                "mess": "hello can't I help You",
                    "image":"http://turitmo.com/wp-content/uploads/2017/12/Taylor-Swift-revenge-nerds.jpg"
                },
                {
                    "key":9,
                    "name": "Ms.Taylor",
                "age": "27",
                "people": "1",
                "book": "0",
                "friend":"Nhat Thanh",
                "mess": "Hi There",
                    "image":"http://www.khartoumpost.net/wp-content/uploads/2017/08/%D8%AA%D9%8A%D9%84%D9%88%D8%B1-%D8%B3%D9%88%D9%8A%D9%81%D8%AA.jpg"
                },
                {
                    "key":10,
                    "name": "Beauty Girl",
                "age": "20",
                "people": "3",
                "book": "1",
                "friend":"dang pham",
                "mess": "Xin Chào! làm quen nhé",
                    "image":"http://cdn.cnn.com/cnnnext/dam/assets/170805094558-02-taylor-swift-lead-image-exlarge-169.jpg"
                }
            ]
        }
        
    }

    componentWillMount(){
        fetch('http://www.mocky.io/v2/5a4e04c5320000c13b432750')
        .then((response) => response.json())
        .then((responseJson) => {
            
            list = responseJson;
            console.log(list);
            this.setState({list})
            console.log(list[2].name);
        })
        .catch((error) => {
        console.error(error);
        });
        
    }
    render() {
        return(
            <View style={styles.container} >
                {/* <ScrollView  style={{height:300}}> */}
                    <View style={styles.profileContainer}>
                        <ProfileImage 
                            image={this.state.list[this.state.pos+1].image}
                            name={this.state.list[this.state.pos+1].name}
                            age={this.state.list[this.state.pos+1].age}
                            people={this.state.list[this.state.pos+1].people}
                            book={this.state.list[this.state.pos+1].book}
                            friend={this.state.list[this.state.pos+1].friend}/>
                        <ProfileImage
                            handler = {this.handler} 
                            image={this.state.list[this.state.pos].image}
                            name={this.state.list[this.state.pos].name}
                            age={this.state.list[this.state.pos].age}
                            people={this.state.list[this.state.pos].people}
                            book={this.state.list[this.state.pos].book}
                            friend={this.state.list[this.state.pos].friend}/>                        
                    </View>
                    <View style={styles.dock}>
                        <TouchableOpacity onPress={this.press}>
                            <ReactionDock/>
                        </TouchableOpacity>
                    </View>
                {/* </ScrollView> */}
            </View>
        );
    }
    press=()=>{
        this.setState({pos:this.state.pos===8?0:this.state.pos+1})
        console.log(this.state.pos)
    }
}
