import React from 'react'
import {Button, TextInput, View, StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'

import PropTypes from 'prop-types'

const styles = StyleSheet.create( {
  container:{
    paddingBottom: 10,
    paddingHorizontal: 60,
    paddingTop: Constants.statusBarHeight,

  },
  inputContainer:{  
    padding: 50,
  },
  inputForm:{
    borderColor: 'black',
    borderWidth: 1,
  },
})



export default class AddContactForm extends React.Component{
  static propTypes = {
    addContact: PropTypes.func,
  }

  state = {
    name :'',
    phone : '',
  }

  handleNameChange = name =>{
    this.setState({name})
  }
  handlePhoneChange = phone =>{
    this.setState({phone})
  }


  render(){
    return(
      <View style={styles.container } >

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputForm} value={this.state.name} onChangeText={this.handleNameChange}/>
          <TextInput style={styles.inputForm} value={this.state.phone} onChangeText={this.handlePhoneChange} keyboardType='numeric'/>
        </View>
        <Button title='Add Contact'></Button>
        <StatusBar style="auto" />

      </View>
    )
  }


}