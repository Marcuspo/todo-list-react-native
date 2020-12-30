import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabBarItem from './TabBarItem';

const TabBar = ({setType, type}) => (
  <View style={styles.container}>
    <TabBarItem type={type} title="Todos" setType={() => setType('Todos')} />
    <TabBarItem
      type={type}
      title="Ativos"
      border
      setType={() => setType('Ativos')}
    />
    <TabBarItem
      type={type}
      title="Completados"
      border
      setType={() => setType('Completados')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
});

export default TabBar;
