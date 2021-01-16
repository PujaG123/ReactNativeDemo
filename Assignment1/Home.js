import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export class Home extends Component {
  render() {

    return (
      <SafeAreaView>
        <View style={{ height: 200, backgroundColor: 'red' }}>
          <Image style={styles.imageStyle}
            source={require('./slider_img1.jpg')} />
        </View>
        
        <View style={styles.flexrow_container}>
          <TouchableOpacity style={styles.cell}>
            <Image style={styles.boxImage}
              source={require('./tableicon.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cell}>
            <Image style={styles.boxImage}
              source={require('./sofaicon.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.flexrow_container}>
          <TouchableOpacity style={styles.cell}>
            <Image style={styles.boxImage}
              source={require('./chairsicon.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell}>
            <Image style={styles.boxImage}
              source={require('./cupboardicon.png')} />
          </TouchableOpacity>
          </View>

        <View style={styles.secondcontainer}>
        <TouchableOpacity
                style={styles.bottomTabs}>
                <Text style={{alignSelf:'center', 
                alignItems :'center',
                    justifyContent:'center',
                    color:'#e91b1a',
                    fontWeight : 'bold',
                    fontSize: 15}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.bottomTabs}>
                <Text style={{alignSelf:'center', alignItems :'center',
                    justifyContent:'center',
                    color:'#e91b1a',
                    fontWeight : 'bold',
                    fontSize: 15}}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.bottomTabs}>
                <Text style={{alignSelf:'center', alignItems :'center',
                    justifyContent:'center',
                    color:'#e91b1a',
                    fontWeight : 'bold',
                    fontSize: 15}}>Settings</Text>
            </TouchableOpacity>


        </View>
      </SafeAreaView>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  secondcontainer : {
    justifyContent : 'flex-start',
    alignItems:'center',
    height:'10%',
    width : '100%',
    flexDirection:'row',
    backgroundColor: 'red',
    marginTop:20
},
  dashboardButtonContainer: {
    elevation: 1,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 30,
    alignSelf: 'center',
    flex: 1,
    height: '80%',
    padding: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: '#e91b1a',
    borderColor: 'white',
  },
  bottomTabs: {
    borderWidth: 1,
    alignSelf: 'center',
    height: '100%',
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#e91b1a',
    backgroundColor: 'white',
    borderColor: '#e91b1a',
  },
  textstyles: {
    color: '#e91b1a',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  bottomcontainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: 100,
    width: '100%',
    backgroundColor: 'skyblue',
  },
  boxContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    paddingTop: 20,
  },
  boxImage:
  {
    height: '100%',
    width: '100%',
    resizeMode: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  boxlayoutstyle: {
    flexDirection: 'row',
    height: '35%',
    width: '50%',
    justifyContent: 'space-evenly',
    marginTop: 20,
    backgroundColor: 'red'
  },
  boxstyle: {
    backgroundColor: '#0aa871',
    height: '100%',
    width: '40%',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'lightgray',
    shadowOpacity: 1.0,
    borderRadius: 8,
  },
  top_container: {
    paddingTop: 10,
    backgroundColor: 'red',
  },
  flexrow_container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 250,
    width: '100%'
  },
  cell: {
    backgroundColor: "red",
    height: '100%',
    width: '50%',
    margin: 1,
  },
  bottom_container: {
    flexDirection: 'column',
    backgroundColor: 'blue',
    justifyContent: 'center',
    height: '33%',
    width: '100%',
  },
});
