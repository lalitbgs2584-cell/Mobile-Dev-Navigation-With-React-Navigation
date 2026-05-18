import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

const DetailScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>DetailScreen</Text>

      <Button onPress={() => navigation.goBack()}>
        Go Back
      </Button>

      <Button
        onPress={() =>
          navigation.navigate('Profile', {
            name: 'Lalit',
            age: 20,
            role: 'Developer'
          })
        }
      >
        Profile
      </Button>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})