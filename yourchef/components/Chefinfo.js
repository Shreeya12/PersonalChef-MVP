
import React from 'react';
import {  Text, SafeAreaView,View, StyleSheet, Button,TouchableOpacity, Image} from 'react-native';
import Constants from 'expo-constants';
function Separator() {
  return <View style={styles.separator} />;
}
class Chefinfo extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
  return (
 <SafeAreaView >
     <Text style ={styles.title}>
         Pick Your Chef
     </Text>
    <View style = {styles.infobody}>
      <Text style = {styles.imageBorder}>
      </Text>
      <Text style = {styles.bodytext}>
        Shreeya Bhetwal
        Beginner Chef
        <TouchableOpacity
          style={styles.selectbutton}
          underlayColor='pink'
          onPress={() => {
            alert('You selected Shreeya Bhetwal!');
          }}
          >
          <Text> Select </Text>
        </TouchableOpacity>
      </Text>
    </View>
    <View style = {styles.infobody}>
      <Text style = {styles.imageBorder}>
      </Text>
    <Text style = {styles.bodytext}>
        William A. Jones   
        Expert Chef
        <TouchableOpacity
          style={styles.selectbutton}
          underlayColor='pink'
          onPress={() => {
            alert('You selected William A. Jones!');
          }}
          >
          <Text style = {styles.selecttext}> Select </Text>
        </TouchableOpacity>
  </Text>
    </View>

    <View style = {styles.infobody}>
      <Text style = {styles.imageBorder}>
      </Text>
      <Text style = {styles.bodytext}>
        James Hawkins
        Expert Chef
        <TouchableOpacity
          style={styles.selectbutton}
          underlayColor='pink'
          onPress={() => {
            alert('You selected James Hawkins!');
          }}
          >
            
          <Text style = {styles.selecttext}> Select </Text>
        </TouchableOpacity>
        </Text>
     
        
    </View>
    <View style = {styles.infobody}>
      <Text style = {styles.imageBorder}>
      </Text>
      <Text style = {styles.bodytext}>
      Gussie P. McLean
        Beginner Chef
        <TouchableOpacity
          style={styles.selectbutton}
          underlayColor='#fff'
          onPress={() => {
            alert('You selected Gussie P. McLean!');
          }}
          >
          <Text style={styles.selecttext}> Select </Text>
  </TouchableOpacity>
        </Text>
    </View>
    <Separator/>
    <Separator/>
    <TouchableOpacity
          style={styles.button}
          onPress={() =>this.props.navigation.navigate('Yourbooking')}
          underlayColor='pink'>
              <Separator/>
          <Text style={styles.buttonText}>Confirm </Text>
        </TouchableOpacity>

     <TouchableOpacity
          style={styles.footer}
          underlayColor='pink'>
        </TouchableOpacity>
 </SafeAreaView>
  );
  }
}

export default Chefinfo;

const styles = StyleSheet.create({
 
  title: {
    padding: 30,
    backgroundColor: 'brown',
    fontSize: 20,
    textAlign: 'center'
},
infobody: {
  flexDirection: 'row',
  marginTop: 20
},
footer: {
  borderWidth: 1,
  borderColor: '#007BFF',
  padding: 50,
  marginBottom: 0,
  marginTop: 68,
  backgroundColor:'brown',
},
imageBorder: {
  width: 100,
  height: 100,
   borderRadius: 100 / 2,
   borderWidth: 3,
},
selectbutton: {
  borderWidth: 1,
  borderColor: '#007BFF',
  padding: 15,
  marginRight: 50,
  backgroundColor:'brown',

 },
 button: {
  borderWidth: 1,
  borderColor: '#007BFF',
  padding: 10,
  margin: 5,
  backgroundColor:'brown',

 },
 selecttext: {
  color:'#fff',
  textAlign:'center',
  fontSize: 10,
  paddingLeft : 10,
  paddingRight : 10
 },

bodytext: {
  flexDirection: 'column',
  flexWrap:'wrap',
  textAlign: 'center',
  fontSize: 20,
  marginRight:260
},
buttonText: {
  color:'#fff',
  textAlign:'center',
  fontSize: 25,
  marginBottom:10
 },
separator: {
  marginVertical: 8,
  borderBottomColor: 'transparent',
  borderBottomWidth: StyleSheet.hairlineWidth,
},

})
