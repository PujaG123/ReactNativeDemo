import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export class Login extends Component {
    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.TextTitle}>NeoStore</Text>
                <View style={styles.inputView}>
                    <TextInput placeholder='Email'
                        placeholderTextColor='#003f5c'
                        style={styles.TextInput} />
                </View>
                <View style={styles.inputView}>
                    <TextInput placeholder='Password'
                        placeholderTextColor='#003f5c'
                        style={styles.TextInput} />
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.register_Button}>DONT HAVE AN ACCOUNT?</Text>
      </TouchableOpacity>
            </View>



        );
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 10,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    TextTitle: {
        fontSize: 40,
        marginTop: 50
    },
    loginBtn: {
        width: "80%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "white",
    },
    forgot_button: {
        height: 30,
        marginTop: 30,
      },
      loginText : {
          fontSize: 20,
      },
      register_Button: {
        marginBottom: 0,
        
      },
});
