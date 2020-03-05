import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

function Separator() {
    return <View style={styles.separator} />;
  }
 const Yourbooking = ({navigation}) => (

   <View>
       <Text style = {styles.title}>
           Please Check your booking below
       </Text>

        <View>
            <Text style = {styles.bodytext}>
        Your chef William A. Jones will see you on Monday, April 22, 2020
            at 11:00 am.
        </Text>

        <Text style = {styles.endtext}>
            Thank you for the booking. Enjoy your homemade food !
        </Text>

        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>navigation.navigate('Homescreen')}
          underlayColor='pink'>
              <Separator/>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footer}
          underlayColor='pink'>
        </TouchableOpacity>
   </View>
      
)

export default Yourbooking;

const styles = StyleSheet.create({
   container: {
        flex: 1,
       justifyContent:'center',
        flexDirection: 'column',
    },
    title: {
      padding: 30,
      backgroundColor: 'brown',
      fontSize: 20,
      textAlign: 'center'
  },
  bodytext: {
    padding: 90,
    fontSize: 20,
    letterSpacing: 2,
    lineHeight: 25,
    fontFamily: 'Cochin',
    fontWeight: 'bold',

  },
  button: {
    borderWidth: 1,
    borderColor: '#007BFF',
    padding: 10,
    margin: 5,
    backgroundColor:'brown',
  
   },
   buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize: 25,
    marginBottom:10
   },
  endtext: {
    padding: 40,
    fontSize: 15,
    fontFamily: 'Cochin'

  },
  footer: {
    borderWidth: 1,
    borderColor: '#007BFF',
    padding: 50,
    marginBottom: 0,
    marginTop: 220,
    backgroundColor:'brown',
  }
});