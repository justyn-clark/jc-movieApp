/* @flow */

import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default class BlankTab extends Component {
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Blank Tab</Text>
        <View style={styles.separator} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  content: {
    paddingVertical: 16
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(0, 0, 0, 0.12)'
  },
  heading: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 8,
    marginHorizontal: 16
  }
});
