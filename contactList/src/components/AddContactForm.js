import React from 'react'
import {Button, TextInput, KeyboardAvoidingView,View , StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'

import PropTypes from 'prop-types'

const styles = StyleSheet.create( {
  container:{
    backgroundColor: '#fff',
    paddingBottom: 10,
    paddingHorizontal: 60,
    paddingTop: Constants.statusBarHeight,
    marginBottom:20,

  },
  inputContainer:{  
    paddingBottom: 40,
  },
  inputForm:{
    borderColor: 'black',
    borderWidth: 1,
    minWidth:100,
    marginTop:20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})



export default class AddContactForm extends React.Component{
  state = {
    name :'',
    phone : '',
    isFormValid: false,
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.name !== prevState.name || this.state.phone !== prevState.phone){
      this.validateForm()
    }
  }

  getHandler = key => val =>{
    this.setState({[key]: val})
  }

  // handleNameChange = this.getHandler('name')
  
  // handlePhoneChange = this.getHandler('phone')
  // handleNameChange = name =>{
  //   this.setState({name})
  // }
  // handlePhoneChange = phone =>{
  //   if(+phone >= 0 && phone.length <= 10){
  //     this.setState({phone})
  //   }
  // }

  validateForm = () => {
    const names =this.state.name.split(' ')
    if(+this.state.phone >= 0 && this.state.phone.length === 10 && names.length >=2 && names[1] && names[0]){
      return this.setState({isFormValid: true})
    }else{
      return this.setState({isFormValid: false})
    }

  }

  handleSubmit = () => {
      this.props.onSubmit({...this.state})
    }
  

  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container } >

        <View style={styles.inputContainer}>
          <TextInput
           style={styles.inputForm} 
           value={this.state.name} 
           onChangeText={this.getHandler('name')} 
           placeholder='Name'
           />
          <TextInput
           keyboardType='numeric'
           style={styles.inputForm} 
           value={this.state.phone} 
           onChangeText={this.getHandler('phone')} 
           placeholder='Phone' 
           />
        </View>
        <Button title='Add Contact' onPress={this.handleSubmit} disabled={!this.state.isFormValid}></Button>
        <StatusBar style="auto" />

      </KeyboardAvoidingView>
    )
  }


}