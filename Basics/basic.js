import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Greeting = (props) => {
    return (
        <View style={styles.centerView}>
            <Text > Hello {props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    centerView: {
        alignItems: 'center',
        backgroundColor: 'red',
    }
})


const LotsOfGreetings = () => {
    return (
        <View>
            <Greeting name="Puja" />
            <Greeting name="Kumari" />
            <Greeting name="Gupta" />
        </View>
    );
}

// export default LotsOfGreetings;

export  class MyClass extends Component {
    render() {
        return (
            <SafeAreaView>

            <View style={{height: '100%' , flexDirection: 'column'}}>
                <Greeting name="Puja" />
                <Greeting name="Kumari" />
                <Greeting name="Gupta" />
            </View>
            </SafeAreaView>

        );
    }
}
export default MyClass;