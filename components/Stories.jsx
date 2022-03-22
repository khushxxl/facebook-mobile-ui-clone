import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { data } from '../data'

const Stories = () => {
  return (
    <View style={tw`bg-white mt-4 items-center p-2 `}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View style={tw`flex flex-row`}>
              {index === 0 && (
                <View style={tw` ml-5  flex items-center relative`}>
                  <Image
                    source={{
                      uri:
                        'https://scontent.famd4-1.fna.fbcdn.net/v/t1.6435-9/120998838_215264236822298_5948238713996326514_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ISuldyK_rD8AX9Dv9Pb&_nc_ht=scontent.famd4-1.fna&oh=00_AT8Mwh46ulDEdtP4BIRP0ByKzAo1g192dg-4sGo4beIYkA&oe=625CEE2E',
                    }}
                    style={{ height: 200, width: 110, borderRadius: 20 }}
                  />
                  <View
                    style={tw`bg-white absolute bottom-0 w-28 shadow-xl h-14 flex items-center rounded-b-2xl`}
                  >
                    <View style={tw`bg-white pt-2`}>
                      <View
                        style={tw`bg-blue-500 h-12 w-12 flex items-center  shadow-2xl justify-center  rounded-full -mt-7`}
                      >
                        <Ionicons
                          name="add-outline"
                          size={40}
                          style={tw`ml-1`}
                          color="white"
                        />
                      </View>
                    </View>
                    <Text style={tw`font-bold text-center`}>Create story</Text>
                  </View>
                </View>
              )}

              <View style={tw` ml-5 relative`}>
                <Image
                  source={{ uri: item.src }}
                  style={{ height: 200, width: 120, borderRadius: 20 }}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    padding: 5,
                    backgroundColor: 'blue',
                    borderRadius: 50,
                  }}
                >
                  <Image
                    source={{ uri: item.profile }}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                    }}
                  />
                </View>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({})
