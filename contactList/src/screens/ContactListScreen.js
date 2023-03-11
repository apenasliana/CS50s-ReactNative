import React from "react";
import {StyleSheet, View, Button} from "react-native"
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar';



import ContactsList from "../components/ContactsList";


export default class ContactListScreen extends React.Component{
  state = {
    showContacts: true,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  showForm = () => {
    this.props.navigation.navigate('AddContact')
  }

  render(){
    return(
      <View style={styles.container}>
      <Button title= "toggle" onPress={this.toggleContacts}></Button>
      
      <Button title= "add contact" onPress={this.showForm}></Button>
      {this.state.showContacts && <ContactsList contacts={this.props.screenProps.contacts}/>
      }
      <StatusBar style="auto" />
    </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },

});
