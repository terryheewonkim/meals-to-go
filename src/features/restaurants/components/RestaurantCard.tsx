import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Card } from 'react-native-paper'

interface RestaurantInfoProps {
  restaurant: {
    name: string,
    icon: any,
    photos: string[],
    address: string,
    isOpenNow: boolean,
    rating: number,
    isClosedTemporarily: boolean,
  }
}

const RestaurantCard = (props: RestaurantInfoProps) => {
  const { restaurant } = props
  const {
    name = 'Some Restaurant',
    icon,
    photos = ['https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant ?? {}

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} src={photos[0]} style={styles.cover} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFFFFF' },
  cover: { padding: 0, backgroundColor: '#FFFFFF' },
  title: { padding: 16 },
})

export default RestaurantCard
