import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'

const Post = () => {
  const post = useSelector((state) => state.post)

  return (
    <View>
      {post.texts.map((text) => {
        return (
          <View>
            {text.myText.length > 1 && (
              <View style={tw`bg-white p-2  mb-4`}>
                <View>
                  <View style={tw`flex flex-row items-center`}>
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

                    <View style={tw`ml-2`}>
                      <Text style={tw`text-sm font-bold`}>
                        Khushaal Choithramani
                      </Text>
                      <View style={tw`flex flex-row items-center`}>
                        <Text style={tw`text-xs font-semibold text-gray-500`}>
                          Developer
                        </Text>
                        <Text
                          style={tw`text-xs font-semibold text-gray-500 ml-1`}
                        >
                          · 21m
                        </Text>
                        <Ionicons
                          name="earth-outline"
                          size={15}
                          style={tw`ml-1`}
                          color="gray"
                        />
                      </View>
                    </View>
                  </View>
                </View>

                <View style={tw` mt-2 ml-2`}>
                  <Text style={tw`font-semibold`}>{text.myText}</Text>
                </View>

                <View
                  style={{
                    borderBottomColor: 'lightgray',
                    borderBottomWidth: 1,
                    marginTop: 14,
                    marginRight: 24,
                    marginLeft: 24,
                  }}
                />

                <View style={tw`flex flex-row items-center justify-evenly m-2`}>
                  <TouchableOpacity>
                    <View style={tw`flex-row items-center`}>
                      <View>
                        <Ionicons
                          name="thumbs-up-outline"
                          size={30}
                          style={tw``}
                          color="gray"
                        />
                      </View>
                      <View>
                        <Text style={tw`ml-1 text-gray-600 font-extrabold`}>
                          Like
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={tw`flex-row items-center`}>
                      <View>
                        <Ionicons
                          name="chatbox-outline"
                          size={30}
                          style={tw``}
                          color="gray"
                        />
                      </View>
                      <View>
                        <Text style={tw`ml-1 text-gray-600 font-extrabold`}>
                          Comment
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View style={tw`flex-row items-center`}>
                      <View>
                        <Ionicons
                          name="arrow-redo-outline"
                          size={30}
                          style={tw``}
                          color="gray"
                        />
                      </View>
                      <View>
                        <Text style={tw`ml-1 text-gray-600 font-extrabold`}>
                          Share
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    borderBottomColor: 'lightgray',
                    borderBottomWidth: 1,
                    marginRight: 24,
                    marginLeft: 24,
                  }}
                />
              </View>
            )}
          </View>
        )
      })}
    </View>
  )
}

export default Post

const styles = StyleSheet.create({})
