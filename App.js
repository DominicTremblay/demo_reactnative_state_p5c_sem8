import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import { listePersonnages } from './data/personnages'
import VuePersonnage from './fonctionalites/personnages/vues/Personnage.vue'
import { useState } from 'react'

export default function App() {
  const [personnages, setPersonnages] = useState(listePersonnages)

  return (
    <>
      <VuePersonnage personnages={personnages} />
      <ExpoStatusBar style="auto" />
    </>
  )
}
