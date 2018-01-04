import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    PanResponder,
    TouchableOpacity
} from 'react-native';
import LocalImage from '../../components/image/LocalImage'
var widthP = 10;
export default class ProfileImage extends Component {
    
    constructor(props){
        super(props)
        this.state={
            positionX:0,
            positionY:0,
            rotateT: 0,
            likeOp:0,
            nopeOp:0,
            superLikeOp:0,
        }

    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
          // Ask to be the responder:
          onStartShouldSetPanResponder: (evt, gestureState) => true,
          onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
          onMoveShouldSetPanResponder: (evt, gestureState) => true,
          onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    
          onPanResponderGrant: (evt, gestureState) => {
            // The gesture has started. Show visual feedback so the user knows
            // what is happening!
            console.log('onPanResponderGrant');
            
            // gestureState.d{x,y} will be set to zero now
          },
          onPanResponderMove: (evt, gestureState) => {
            console.log('onPanResponderMove');
            // The most recent move distance is gestureState.move{X,Y}
    
            // The accumulated gesture distance since becoming responder is
            this.setState({positionX:gestureState.dx}) 
            this.setState({positionY:gestureState.dy})
            this.setState({rotateT:gestureState.dx+gestureState.dy})
            if(gestureState.dx>20&&gestureState.dy<20&&gestureState.dy>-20){
                this.setState({likeOp:1, nopeOp:0, superLikeOp:0});
                
            }else if(gestureState.dx<-20&&gestureState.dy<20&&gestureState.dy>-20){
                this.setState({likeOp:0, nopeOp:1, superLikeOp:0});
                
            }else if(gestureState.dx>-20&&gestureState.dx<20&&gestureState.dy<-50){
                this.setState({likeOp:0, nopeOp:0, superLikeOp:1});
                
            } else {
                this.setState({likeOp:0, nopeOp:0, superLikeOp:0});
            }
            console.log(this.state.positionX, this.state.positionY)
            console.log(this.state.rotateT)
          },
          onPanResponderTerminationRequest: (evt, gestureState) => true,
          onPanResponderRelease: (evt, gestureState) => {
            // console.log('onPanResponderRelease');
            this.setState({positionX:0}) 
            this.setState({positionY:0})
            this.setState({rotateT:0})
            this.setState({likeOp:0, nopeOp:0, superLikeOp:0})
            this.props.handler
            // The user has released all touches while this view is the
            // responder. This typically means a gesture has succeeded
          },
          onPanResponderTerminate: (evt, gestureState) => {
            console.log('onPanResponderTerminate');
            // Another component has become the responder, so this gesture
            // should be cancelled
            
          },
          onShouldBlockNativeResponder: (evt, gestureState) => {
            console.log('onShouldBlockNativeResponder');
            console.log(this.state.positionX, this.state.positionY)
            // Returns whether this component should block native components from becoming the JS
            // responder. Returns true by default. Is currently only supported on android.
            return true;
          },
        });
    }
    render() {
        return(
            <View 
            {...this._panResponder.panHandlers}
                style={[styles.container,{
                    transform:[
                        {
                            translateX:this.state.positionX
                        },
                        {
                            translateY:this.state.positionY
                        },
                        {
                            rotate:this.state.positionX/3+'deg'
                        }
                    ]
                }]}>
                <LocalImage
                    source={{uri: this.props.image }}
                    margin={10}
                />
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1, paddingLeft:10}}>
                        <Text style={styles.name}>{this.props.name}, {this.props.age}</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <View style={{flex:1, alignItems:'center', flexDirection:'row'}}>
                            <Image source={require('../../../public/images/home/people.png')}/>
                            <Text style={{color: '#fe5068', fontSize:28, fontWeight:'100'}}>{this.props.people}</Text>
                        </View>
                        <View style={{flex:1, alignItems:'center', flexDirection:'row'}}>
                            <Image source={require('../../../public/images/home/book.png')}/>
                            <Text style={{color: '#cfcfcf', fontSize:28, fontWeight:'100'}}>{this.props.book}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.textInfo}>Friend with {this.props.friend}</Text>
                <Reaction
                    style={{
                        position:'absolute',
                        transform:[{
                            rotate: '-10deg',
                        }],
                        top: 10,
                        left: 10}}
                    name='Like'
                    opacity={this.state.likeOp}
                    width={120}
                    color='#38ca78'/>
                <Reaction
                    style={{
                        position:'absolute',
                        transform:[{
                            rotate: '10deg',
                        }],
                        top: 10,
                        right: 10}}
                    name='Nope'
                    opacity={this.state.nopeOp}
                    width={150}
                    color='#fe5068'/>
                <Reaction
                    style={{
                        position:'absolute',
                        transform:[{
                            rotate: '10deg',
                        }],
                        top: 100,
                        right: 100}}
                    name='Super Like'
                    opacity={this.state.superLikeOp}
                    width={200}
                    color='#3ca4ff'/>                    
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
        position:'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0
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
    },

});
export class Reaction extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={[{
                borderColor:this.props.color,
                // borderWidth: 4,
                width: this.props.width,
                borderRadius:5,
                justifyContent: 'center',
                alignItems:'center',
                opacity:this.props.opacity,
                
            },this.props.style]}>
                <Text style={{
                    color:this.props.color,
                    fontSize: 60,
                    }}>
                    {this.props.name}
                </Text>
            </View>
        );
    }
}