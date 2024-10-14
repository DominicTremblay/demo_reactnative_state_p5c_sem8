import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import { personnages } from './data/personnages'
import VuePersonnage from './fonctionalites/personnages/vues/Personnage.vue'

export default function App() {
  return (
    <>
      <VuePersonnage personnages={personnages}/>
      <ExpoStatusBar style="auto" />
    </>
  )
}

