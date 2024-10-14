import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import { personnages } from './data/personnages'
import VuePersonnage from './fonctionalites/vues/VuePersonnage'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 16, backgroundColor: 'lightgreen' }}>
          <Text>search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: 'lightcoral' }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'lightblue',
  },
})
