import React from 'react'
import { StyleSheet, View, Button} from 'react-native';
import Constants  from 'expo-constants'
import { StatusBar } from 'expo-status-bar';


import AddContactForm from './src/components/AddContactForm';
import ContactsList from './src/components/ContactsList';
import contacts, {compareNames} from './src/contacts'


export default class App extends React.Component {
  state = {
    showContacts: false,
    showForm: false,
    contacts: contacts,
  }

  addContact = newContact => {
    this.setState(prevState => ({showForm: false, contacts: [...prevState.contacts, newContact]}))
  }

  toggleForm = () =>{
    this.setState(prevState => ({showForm: !prevState.showForm}))
  }
  toggleContacts = () =>{
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  sort = () =>{
    this.setState(prevState =>({
      contacts: [...prevState.contacts].sort(compareNames),
    }))
  }

  render() {
    if(this.state.showForm) return (
    <View>
      <AddContactForm onSubmit={this.addContact}/> 
      <Button title='Cancel' onPress={this.toggleForm}/> 
    </View>
    )
    
    return (
    <View style={styles.container}>
      <Button title= "toggle" onPress={this.toggleContacts}></Button>
      
      <Button title= "add contact" onPress={this.toggleForm}></Button>
      {this.state.showContacts && <ContactsList contacts={this.state.contacts}/>
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
