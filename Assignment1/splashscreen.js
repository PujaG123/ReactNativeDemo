import React, { Component } from 'react'
import { View, SafeAreaView, Image, StyleSheet } from 'react-native';


export  class SplashScreen extends Component {
    render() {
        return (

                <View style = {styles.viewStyle}>
                    <Image
                        style={styles.imageStyle}
                        source={require('./Background.png')}
                    />
                </View>
        );
    }
}

const styles = StyleSheet.create
    (
        {
            imageStyle: {
                 height: '100%',
                 width: '100%'
            },
            viewStyle:
            {
                flex : 1,
                justifyContent : 'center',
                alignItems : "center",
            }



        }
    );