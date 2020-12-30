import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Heading = () => (
  <View style={style.header}>
    <Text style={style.headerText}>Lista</Text>
  </View>
);

const style = StyleSheet.create({
  header: {
    marginTop: 80,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: 'blue',
    fontWeight: '100',
  },
});

export default Heading;
