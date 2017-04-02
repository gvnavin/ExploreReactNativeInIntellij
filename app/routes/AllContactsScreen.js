import {TabNavigator, StackNavigator} from "react-navigation";
import React from 'react';
import {AppRegistry, Button, Text, View} from 'react-native';

//https://reactnavigation.org/docs/intro/headers

class AllContactsScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>List of all contacts</Text>
                <Button
                    onPress={() => navigate('Chat', {user: 'Jane Vinay'})}
                    title="Chat with Jane Vinay"
                />
            </View>
        );
    }
}

export default AllContactsScreen;