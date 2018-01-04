import React from 'react'
import { StackNavigator} from 'react-navigation'
import SettingsScreen from '../screens/settings/Index';
import ProfileScreen from '../screens/profile/Index';
import ProfileHeader from '../components/header/profile'
import CreateGroupHeader from '../components/header/createGroup'
import SettingHeader from '../components/header/settings';
import CreateGroup from '../screens/createGroup/Index';
import Chat from '../screens/chat/Index'
import ChatHeader from '../components/header/chat'
export default RootScreen = StackNavigator({
    
    Chat:{
        screen: Chat,
        navigationOptions:{
            header: <ChatHeader/>
        }
    },

    CreateGroup: {
        screen : CreateGroup,
        navigationOptions:{
            header: <CreateGroupHeader/>
        }
    },
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