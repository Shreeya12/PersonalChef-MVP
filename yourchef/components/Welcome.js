import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

function Separator() {
    return <View style={styles.separator} />;
  }
 const Welcome = ({navigation}) => (

    <View style = {styles.container}>
       <Text style = {styles.title} > Pick Your Chef ..</Text>
       <Separator/>
       <Separator/>
        <TextInput 
          placeholder="Email" />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
        <Separator/>
        <TouchableOpacity
        title ='go to Homescreen'
          style={styles.button}
          onPress={() => navigation.navigate('Homescreen', {name: 'Homescreen'})}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login</Text>
 </TouchableOpacity>
 <Text style = {styles.title} > Don't have an account yet ?</Text>
 <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('HomeScreen')}
          underlayColor='pink'>
          <Text style={styles.loginText}>SignUp</Text>
 </TouchableOpacity>
    </View>
)

//styles object
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
   button: {
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
   },
   loginText: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
   },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
 
  });
export default Welcome;

