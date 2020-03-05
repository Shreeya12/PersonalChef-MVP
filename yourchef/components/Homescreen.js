
import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import {Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';

function Separator() {
    return <View style={styles.separator} />;
  }
export default class Homescreen extends Component {
  constructor(props){
    super(props)
    this.state = { 
        date :new Date(),
        time :  '10:00'
    }
  }
  render(){
    return (
        <View> 
         <View style ={styles.title}>
        <Text style = {styles.headertext}>
            What time would you want to Chef to cook for you?
        </Text>
        </View>
        <Separator/>
        <Separator/>
        <Separator/>
        <Text style = {styles.bodytext}>Select the Date</Text>
        <Separator/>
        <Separator/>
      <DatePicker 
        style={styles.datepicker}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2001-05-01"
        maxDate="2080-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
        <Separator/>
        <Separator/>
        <Text style = {styles.bodytext}>Select the Time</Text>
        <Separator/>
        <DatePicker 
        style={styles.datepicker}
        date={this.state.time}
        mode="time"
        placeholder="select time"
        format="hh:mm a"
        minTime="12:20"
        maxTume="00:00"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(time) => {this.setState({time: time})}}
      />
      <Separator/>
      <Text style = {styles.bodytext} >Message for the Chef?</Text>
        <Separator/>
        <TextInput style ={styles.dietarymessage}
          placeholder="Write your dietary needs" />
          <Separator/>
          <Separator/>
          <TouchableOpacity
          style={styles.button}
          onPress={() =>this.props.navigation.navigate('Chefinfo')}
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
  }
}



//Style object
const styles = StyleSheet.create ({
    
    title: {
        padding: 30,
        backgroundColor: 'brown',
        fontSize: 20,
        textAlign: 'center'
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
    headertext : {
        color: 'white'
    },
    bodytext: {
        textAlign: 'center',
        fontSize: 20
    },
    datepicker: {
         width: 400
    },
    dietarymessage: {
            borderWidth: 0.2,
            width: 400,
            height: 100,
            marginLeft: 10,
            marginRight: 10
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: 'transparent',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      footer: {
        borderWidth: 1,
        borderColor: '#007BFF',
        padding: 50,
        marginBottom: 0,
        marginTop: 140,
        backgroundColor:'brown',
      }
})





