import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import React, { useRef, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { addPost } from '../redux/postSlice.js'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const post = useSelector((state) => state.post)
  const dispatch = useDispatch()
  const [myText, setMyText] = useState('')
  return (
    <SafeAreaView style={tw`bg-white`}>
      <View style={tw`flex flex-row items-center justify-between`}>
        <View>
          <Image
            source={require('../images/logo.png')}
            style={{ height: 30, width: 120, marginLeft: 10 }}
          />
        </View>

        <View>
          <View style={tw`flex flex-row mr-5 `}>
            <View
              style={tw`bg-gray-200 flex items-center justify-center p-1 rounded-full`}
            >
              <Ionicons name="search" size={30} style={tw``} />
            </View>
            <View
              style={tw`bg-gray-200 flex items-center p-1 rounded-full ml-2`}
            >
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={30}
                style={tw``}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={tw`mt-3 flex flex-row items-center justify-between `}>
        <View style={tw`flex flex-row items-center`}>
          <View>
            <Image
              source={{
                uri:
                  'https://lh3.googleusercontent.com/ogw/ADea4I5krKu2nC-gm4lsIvtJy7lPH3OwYzf8aQoufLOobu0=s64-c-mo',
              }}
              style={{
                height: 50,
                width: 50,
                marginLeft: 10,
                borderRadius: 25,
              }}
            />
          </View>
          <View>
            <TextInput
              placeholder="What's on your mind?"
              placeholderTextColor="black"
              style={tw`font-bold ml-2 h-16 p-2`}
              onChangeText={setMyText}
              value={myText}
              onSubmitEditing={() => {
                dispatch(addPost({ myText }))
                setMyText('')
              }}
            />
          </View>
        </View>

        <View style={tw`flex flex-row items-center`}>
          <TouchableOpacity
            onPress={() => {
              dispatch(addPost({ myText }))
              setMyText('')
            }}
          >
            <Text style={tw`text-sm text-blue-500 font-semibold mr-2`}>
              Post
            </Text>
          </TouchableOpacity>
          <Ionicons
            name="images-outline"
            size={30}
            style={tw`mr-5`}
            color="red"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Navbar

const styles = StyleSheet.create({})
