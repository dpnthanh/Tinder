import React from 'react'
import {
    View,
    Animated,
    StyleSheet,
    Easing,
    PanResponder,
    Text
} from 'react-native'

export default class AnimatedTest extends React.Component {
    constructor(props){
        super(props)
        this.state={
            positionX:0,
            positionY:0,
            rotateT: 0,
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
            console.log(this.state.positionX, this.state.positionY)
            console.log(this.state.rotateT)
          },
          onPanResponderTerminationRequest: (evt, gestureState) => true,
          onPanResponderRelease: (evt, gestureState) => {
            console.log('onPanResponderRelease');
            this.setState({positionX:0}) 
            this.setState({positionY:0})
            this.setState({rotateT:0})
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

    render(){
        return(
            <View 
                style={styles.container}
                {...this._panResponder.panHandlers}>
                {/* <FadeIn>
                    <View style={styles.box}>
                    </View>
                </FadeIn> */}
                    <View 
                    style={[
                        styles.box,
                        {
                            marginTop:this.state.positionY*2,
                            marginLeft:this.state.positionX*2,
                            transform:[{
                                rotate: this.state.rotateT+'deg'
                                }
                            ]
                    }]}>
                    <Text>{this.state.positionX} -- {this.state.positionY} -- {this.state.rotateT}</Text>
                </View>
            
            </View>
            
        );
    }
}

// export class FadeIn extends React.Component{
//     state = {
//         fadeAnim: new Animated.Value(0),
//         positionX: new Animated.Value(0),
//     }
//     componentDidMount(){
//         Animated.timing(
//             this.state.fadeAnim,
//             {
//                 toValue:1,             
//                 duration:5000
//             }
            
//         ).start();
//         Animated.timing(
//             this.state.positionX,{
//                 toValue: 300,
//                 duration:5000
//             }
//         ).start();
//     }

//     render(){

//         return(
//             <Animated.View style={[this.props.style,{opacity:this.state.fadeAnim, marginLeft: this.state.positionX}]}>
//                 {this.props.children}
//             </Animated.View>
//         );
//     }
// }
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E74C3C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box:{
        width:100,
        height:100,
        backgroundColor:'#2ECC71',
    }
})