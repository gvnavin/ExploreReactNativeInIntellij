import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';

class FlexDirectionBasics extends Component {
    render() {
        return (
            //Try setting `flexDirection` to `column`.
            <View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                </View>

                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                </View>
            </View>
        );
    }
}
;

AppRegistry.registerComponent('ExploreReactNativeInIntellij', () => FlexDirectionBasics);