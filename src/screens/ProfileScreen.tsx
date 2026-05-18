import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ProfileScreen = () => {
  const route = useRoute<any>();

  const { name, age, role } = route.params;

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Role: {role}</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})