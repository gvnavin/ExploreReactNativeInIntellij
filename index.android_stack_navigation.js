import React from 'react';
import {
    AppRegistry, Button,
    Text, View,
} from 'react-native';
import {StackNavigator} from 'react-navigation';

//https://reactnavigation.org/docs/intro/
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat', { user: 'Lucy' })}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = {
        ///title: 'Chat with Lucy',
        // Nav options can be defined as a function of the navigation prop:
        title: ({ state }) => `Chat with ${state.params.user}`,
    };

    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
});

AppRegistry.registerComponent('ExploreReactNativeInIntellij', () => SimpleApp);