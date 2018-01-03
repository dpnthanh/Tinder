import React from 'react'
import { StackNavigator} from 'react-navigation'
import SettingsScreen from '../screens/settings/Index';
import ProfileScreen from '../screens/profile/Index';
import ProfileHeader from '../components/header/profile'
import SettingHeader from '../components/header/settings';


export default RootScreen = StackNavigator({
    
    Setting: {
        screen : SettingsScreen,
            navigationOptions: {
                headerTitle: <SettingHeader/>,
            },
    },
    Profile: {
        screen : ProfileScreen,
        navigationOptions:{
            header: <ProfileHeader/>
        }

    },
    
    


});