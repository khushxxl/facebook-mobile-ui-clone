import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Post from './Post'

const Posts = () => {
  return (
    <View style={tw`mt-5`}>
      <Post />
    </View>
  )
}

export default Posts

const styles = StyleSheet.create({})
