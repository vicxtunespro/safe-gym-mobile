import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function SectionHeader({heading}) {
  return (
    <Text style={styles.sectionHeader}>{heading}</Text> 
  )
}

const styles = StyleSheet({
    sectionHeader: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    }
  })