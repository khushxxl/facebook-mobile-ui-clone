import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from './Navbar'
import tw from 'tailwind-react-native-classnames'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TopSection = () => {
  return (
    <View>
      <Navbar />

      <View
        style={tw`bg-gray-100 p-3 flex flex-row items-center bg-white justify-evenly`}
      >
        {/* <View
          style={tw`bg-white p-1 rounded-xl shadow-sm flex flex-row items-center`}
        >
          <Ionicons
            name="camera-outline"
            size={30}
            style={tw`mr-2`}
            color="red"
          />
          <Text style={tw`font-extrabold mr-2`}>Reel</Text>
        </View> */}
        <View
          style={tw`bg-white p-1 rounded-xl shadow-lg  flex flex-row items-center`}
        >
          <Ionicons
            name="videocam-outline"
            size={30}
            style={tw`mr-2`}
            color="blue"
          />
          <Text style={tw`font-extrabold mr-2`}>Room</Text>
        </View>
        <View
          style={tw`bg-white p-1 rounded-xl shadow-lg flex flex-row items-center`}
        >
          <Ionicons
            name="people-outline"
            size={30}
            style={tw`mr-2`}
            color="blue"
          />
          <Text style={tw`font-extrabold mr-2`}>Groups</Text>
        </View>
        <View
          style={tw`bg-white p-1 rounded-xl shadow-lg flex flex-row items-center`}
        >
          <Ionicons name="videocam" size={30} style={tw`mr-2`} color="red" />
          <Text style={tw`font-bold mr-2`}>Live</Text>
        </View>
      </View>
    </View>
  )
}

export default TopSection

const styles = StyleSheet.create({})
