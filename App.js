import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import BottomNavbar from './components/BottomNavbar'
import Navbar from './components/Navbar'
import Stories from './components/Stories'
import TopSection from './components/TopSection'
import tw from 'tailwind-react-native-classnames'
import Posts from './components/Posts'
import { Provider } from 'react-redux'
import store from './redux/store.js'

export default function App() {
  return (
    <Provider store={store}>
      <View style={tw`flex-1 bg-gray-100`}>
        <TopSection />
        <ScrollView>
          <Stories />
          <Posts />
        </ScrollView>

        <View
          style={{
            position: 'absolute',
            bottom: 50,
            zIndex: 1,
            backgroundColor: 'white',
            height: 10,
          }}
        >
          <BottomNavbar />
        </View>
        <StatusBar style="auto" />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {},
})
