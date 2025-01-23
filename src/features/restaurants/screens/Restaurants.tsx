import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper'

import RestaurantCard from '../components/RestaurantCard'

const Restaurants = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar value="" />
      </View>
      <View style={styles.list}>
        <RestaurantCard />
      </View>
    </SafeAreaView>
  )
}

// NOTE: StatusBar.currentHeight = status bar height on android
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
})


export default Restaurants
