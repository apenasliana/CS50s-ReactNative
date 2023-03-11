import React from 'react'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'


import contacts from './src/contacts'
import AddContactScreen from './src/screens/AddContactScreen';
import ContactListScreen from './src/screens/ContactListScreen';

const AppNavigator = createAppContainer(createSwitchNavigator({
  ContactsList: ContactListScreen,
  AddContact: AddContactScreen,
},{
  initalRouteName:'ContactsList'
})) 

export default class App extends React.Component {
  state = {
    contacts: contacts,
  }

  addContact = newContact => {
    this.setState(prevState => ({contacts: [...prevState.contacts, newContact]}))
  }





  render() {
   
    return (
      <AppNavigator screenProps={{contacts: this.state.contacts, addContact:this.addContact}}/>
    )
  }
}
