import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
    Switch,
    Slider
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import styles from './Styles';
import SBar from '../../components/statusBar/statusBar';

export default class SettingsScreen extends Component {
    render() {
        return(
            <View style={styles.container} >
                <ScrollView>
                    <SBar/>
                    <View style={[styles.containerSmall,{marginBottom:27, marginTop:30}]}>
                        <SettingTypeOne 
                            title = 'Get Tinder Plus'
                            color='#fd5068'/>        
                        <Line/>
                        <SettingTypeOne 
                            title = 'Get More Boots'
                            color='#7c48c3'/>        
                    </View>
                    <TitleBlock title = 'DISCOVERY SETTINGS'/>
                    <View style={[styles.containerSmall,{marginTop:5}]}>
                        <SettingTypeFour title='Location' subTitle='My Current Location' subTitleSmall='Austin, TX'/>

                        <Line/>
                        <SettingTypeFive title='Maximum Distance'/>
                        
                        <Line/>
                        <SettingTypeFour title='Gender' subTitle='Women'/>

                        <Line/>
                        <SettingTypeSix title='Age Range'/>
                    </View>
                    <View style={[styles.containerSmall,{marginTop:25}]}>
                        <SettingTypeThree title='Show me on Tinder'/>
                    </View>
                    <TitleBlockSmall title='Turning this on will show your profile to single users near you'/>
                    <View style={[styles.containerSmall,{marginTop:45}]}>
                        <SettingTypeThree title='Swipe with friends'/>
                    </View>
                    <TitleBlockSmall title='Turning this on will allow your friends to find you and invite you to swipe togehter.'/>
                    <View style={{margin:30}}>
                    </View>
                    <TitleBlock title = 'WEB PROFILE'/>
                    <View style={styles.containerSmall}>
                        <SettingTypeFour title='Username' subTitle='Claim Yours'/>
                    </View>
                    <TitleBlockSmall title='Create a public Username. Share your Username. Have people all over the world swipe you on Tinder.'/>
                    <View style={{margin:20}}>
                    </View>
                    <TitleBlock title = 'NOTIFICATION'/>
                    <View style={[styles.containerSmall,{}]}>
                        <SettingTypeThree title='New Matches'/>
                        <Line/>
                        <SettingTypeThree title='Messages'/>
                        <Line/>
                        <SettingTypeThree title='Messages Likes'/>
                        <Line/>
                        <SettingTypeThree title='Super Likes'/>
                        <Line/>
                        <SettingTypeThree title='In-App Vibrations'/>
                        <Line/>
                        <SettingTypeThree title='In-App Sounds'/>
                    </View>
                    <TitleBlock title = 'CONTACT US'/>
                    <View style={[styles.containerSmall,{}]}>
                        <SettingTypeOne
                            title='Help & Support'
                            color='#171717'/>
                    </View>
                    <View style={[styles.containerSmall,{marginTop:30, marginBottom:30}]}>                        
                        <SettingTypeOne
                            title='Rate Us'
                            color='#171717'/>
                    </View>                    
                    <View style={[styles.containerSmall,{marginBottom:20}]}>                
                        <SettingTypeOne
                            title='Share Tinder'
                            color='#171717'/>                        
                    </View>
                    <TitleBlock title='LEGAL'/>
                    <View style={[styles.containerSmall, {}]}>
                        <SettingTypeTwo title='Privacy Policy'/>
                        <View style={{marginTop:30,marginBottom:30}}>
                            <SettingTypeTwo  title='Terms of Service'/>
                        </View>
                        <SettingTypeTwo title='Licenses'/>
                    </View>
                    <View style={[styles.containerSmall,{marginTop:30, marginBottom:30}]}>
                        <SettingTypeOne title='Logout' color='#020202'/>
                    </View>
                        <View style={{alignItems:'center'}}>
                            <Image 
                                style={{
                                    width:40, 
                                    height:50, 
                                    }}
                                    
                                source={require('../../../public/images/setting/setting-fire.png')}
                                resizeMode="contain"
                                />
                        </View>
                        
                        <SettingTypeOne title='Version 6.8.0' color='#020202' size={20}/>
                    <View style={[styles.containerSmall,{marginTop:30}]}>
                        <SettingTypeOne title='Delete Account' color='#020202'/>
                    </View>
                </ScrollView>
            </View>
            
        );
    }
}
export class SettingTypeOne extends Component{
    constructor(props){
        super(props);
        

    }
    render(){
        return(
            <View style={{
                alignItems:'center'
            }}>
                <Text style={{
                    
                    fontSize: this.props.size || 20,
                    
                    color: this.props.color
                }}>{this.props.title}</Text>
            </View>
        );
        
    }    
    
}

export class SettingTypeTwo extends Component{
    constructor(props){
        super(props);
        

    }
    render(){
        return(
            <View style={{
                flexDirection:'row'
            }}>
                <Text style={{
                    flex:1,
                    fontSize: 18,
                    color: '#030303',
                    marginLeft: 15,
                }}>{this.props.title}</Text>
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'flex-end',
                    paddingRight: 10
                }}>
                    <Image 
                        style={{width: 8, height: 13}}
                        source={require('../../../public/images/icon/Arrow.png')}
                    />
                </View>
            </View>
            
        );
        
    }    
    
}

export class SettingTypeThree extends Component{
    constructor(props){
        super(props);
        this.state={
            switchOn: false
            
        }
        console.log(this.state.switchOn);
    }
    render(){
        return(
            <View style={{
                flexDirection:'row',
                paddingTop:5,
                paddingBottom:5
            }}>
                <Text style={{
                    flex:1,
                    fontSize: 18,
                    color: '#373737',
                    marginLeft: 15,
                }}>{this.props.title}</Text>
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'flex-end',
                    paddingRight: 10
                }}>
                    <Switch 
                        value= {this.state.switchOn}
                        onValueChange={(val) => {
                            this.setState({
                                switchOn:val
                            })
                            }
                        }
                        disabled= {false}
                        tintColor='#f3f3f3'
                        onTintColor='#fc4f67'
                        thumbTintColor='#ffffff'
                        onThumbTintColor='#000000'
                        />
                </View>
            </View>
            
        );
        
    }    
    
}
export class SettingTypeFour extends Component{
    constructor(props){
        super(props);
        

    }
    render(){
        return(
            <View style={{
                flexDirection:'row'
            }}>
                <Text style={{
                    flex:1,
                    fontSize: 18,
                    color: '#030303',
                    marginLeft: 15,
                }}>{this.props.title}</Text>
                <View style={{
                    flex:3,
                    flexDirection:'row',
                    justifyContent:'flex-end',
                    alignItems:'center',
                    paddingRight: 10
                }}> 
                    <View style={{
                        flexDirection:'column',
                        alignItems:'flex-end'
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: '#898989',
                        }}>{this.props.subTitle}</Text> 
                        <Text style={{
                            fontSize: 15,
                            color: '#898989',
                        }}>{this.props.subTitleSmall}</Text> 
                    </View>
                    
                    <Image 
                        style={{width: 8, height: 13, marginLeft:5}}
                        source={require('../../../public/images/icon/Arrow.png')}
                    />
                </View>
            </View>
            
        );
        
    }    
    
}
export class SettingTypeFive extends Component{
    constructor(props){
        super(props);
        this.state={
            value: 10
            
        }
        
    }
    render(){
        return(
            <View style={{
                flexDirection:'column'
            }}>
                <View style={{
                    flexDirection:'row'
                }}>
                    <View style={{flex:2, paddingLeft:15}}>
                        <Text style={{fontSize:18, color:'#000000'}}>{this.props.title}</Text>
                    </View>
                    <View style={{flex:1, alignItems:'flex-end', paddingRight:15}}>
                        <Text style={{fontSize:18, color:'#898989'}}>{this.state.value}mi</Text>
                    </View>
                </View>
                <Slider
                    value={this.state.value}
                    style={{
                        marginLeft:20,
                        marginRight:20
                    }}
                    minimumTrackTintColor='#fc4f97'
                    maximumValue= {100}
                    step={1}
                    onValueChange={(val) =>{
                        this.setState({
                            value:val
                        })
                    }}
                    
                /> 
            </View>           
        );
        
    }    
    
}
export class SettingTypeSix extends Component{
    constructor(props){
        super(props);
        this.state={
            value: [18,30]
            
        }
        
    }
    render(){
        return(
            <View style={{
                flexDirection:'column'
            }}>
                <View style={{
                    flexDirection:'row'
                }}>
                    <View style={{flex:2, paddingLeft:15}}>
                        <Text style={{fontSize:18, color:'#000000'}}>{this.props.title}</Text>
                    </View>
                    <View style={{flex:1, alignItems:'flex-end', paddingRight:15}}>
                        <Text style={{fontSize:18, color:'#898989'}}>{this.state.value[0]}-{this.state.value[1]}</Text>
                    </View>
                </View>
                <View style={{
                        marginLeft:35,
                        marginRight:35,
                    }}>
                <MultiSlider
                    style={{flex:1}}
                    values={[this.state.value[0],this.state.value[1]]}
                    slideLeght={100}
                    min={18}
                    max={80}
                    step={1}
                    selectedStyle={{
                        backgroundColor: '#fc4c97',
                    }}
                    onValuesChange={(val) =>{
                        this.setState({
                            value:val
                        })
                    }}
                /> 
                </View>
            </View>           
        );
        
    }    
    
}
export class TitleBlock extends Component{
    render(){
        return(
            <Text style={{
                fontSize:14,
                color: '#a6a6a6',
                marginLeft:20
            }}>{this.props.title}</Text>
        );
    }
}
export class TitleBlockSmall extends Component{
    render(){
        return(
            <Text style={{
                fontSize:14,
                color: '#b8b8ba',
                marginLeft:20
            }}>{this.props.title}</Text>
        );
    }
}

export class Line extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                alignItems:'center',
                marginTop:5,
                marginBottom:5
            }}>
            
                <View style={{
                    backgroundColor:'#c8c7cc',
                    width: '90%',
                    height:1
                }}>
            </View>
            </View>
        );
        
    }

}