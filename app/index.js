//https://medium.com/the-react-native-log/organizing-a-react-native-project-9514dfadaa0

import {TabNavigator, StackNavigator} from "react-navigation";
import React from 'react';
import {AppRegistry, Button, Text, View} from 'react-native';
import RecentChatsScreen from "./routes/RecentChatsScreen";
import AllContactsScreen from "./routes/AllContactsScreen";
import ChatScreen from "./routes/ChatScreen";

const MainScreenNavigator = TabNavigator({
    Recent: {screen: RecentChatsScreen},
    All: {screen: AllContactsScreen},
});

MainScreenNavigator.navigationOptions = {
    title: 'My Chats',
};

const SimpleApp = StackNavigator({
    Home: {screen: MainScreenNavigator},
    Chat: {screen: ChatScreen},
});

export default SimpleApp;