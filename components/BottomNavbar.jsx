import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames'

const BottomNavbar = () => {
  return (
    <View>
      <View
        style={{
          height: 2,
          backgroundColor: 'lightgray',
          width: 400,
        }}
      />
      <View style={tw`flex flex-row bg-white h-14`}>
        <View style={tw`flex items-center  ml-4`}>
          <Ionicons name="home-outline" size={30} color="gray" />
          <Text style={tw`font-bold text-xs`}>Home</Text>
        </View>
        <View style={tw`flex items-center   ml-4 `}>
          <Ionicons name="people-outline" size={30} color="gray" />
          <Text style={tw`font-bold text-xs`}>Friends</Text>
        </View>
        <View style={tw`flex items-center  ml-4 `}>
          <Ionicons name="pricetags-outline" size={30} color="gray" />
          <Text style={tw`font-bold text-xs`}>Marketplace</Text>
        </View>
        <View style={tw`flex items-center  ml-4`}>
          <Ionicons name="newspaper-outline" size={30} color="gray" />
          <Text style={tw`font-bold text-xs`}>Feeds</Text>
        </View>
        <View style={tw`flex items-center  ml-4`}>
          <Ionicons name="notifications-outline" size={30} color="gray" />
          <Text style={tw`font-bold text-xs`}>Notifications</Text>
        </View>
        <View style={tw`flex items-center  ml-3`}>
          <Ionicons name="menu-outline" size={30} color="gray" />
          <Text style={tw`font-bold text-xs`}>Menu</Text>
        </View>
      </View>
    </View>
  )
}

export default BottomNavbar

const styles = StyleSheet.create({})
