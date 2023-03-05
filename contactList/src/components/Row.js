import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


export const Row = props => (
    <View style={styles.container}>
      <Text>{props.name}</Text>
      <Text>{props.phone}</Text>
    </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default Row