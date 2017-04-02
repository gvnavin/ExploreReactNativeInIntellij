import {TabNavigator, StackNavigator} from "react-navigation";
import React from 'react';
import {AppRegistry, Button, Text, View} from 'react-native';

//https://reactnavigation.org/docs/intro/headers
class RecentChatsScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>List of recent chats</Text>
                <Button
                    onPress={() => navigate('Chat', {user: 'Lucy'})}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

export default RecentChatsScreen;