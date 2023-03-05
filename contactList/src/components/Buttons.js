import { StyleSheet, Text, View, Button } from 'react-native';

export default function Buttons(){
  return(
    <View>
      <Button title='test' styles={styles.container} >

      </Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#111',
  },
})