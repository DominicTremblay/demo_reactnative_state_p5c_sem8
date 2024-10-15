import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import { listePersonnages } from './data/personnages'
import VuePersonnage from './fonctionalites/personnages/vues/Personnage.vue'
import { useState } from 'react'

export default function App() {
  const [personnages, setPersonnages] = useState(listePersonnages)

  const ajouterPersonnage = (personnage) => {
    const { nom, avatarUrl, espece, occupation, meilleurAmi, phraseCulte } = personnage

    const nouvPerso = {
      id: personnages.length,
      nom,
      avatar_url: {uri: avatarUrl},
      espece,
      occupation,
      meilleur_ami: meilleurAmi,
      phrase_culte: phraseCulte,
    }

    console.log(nouvPerso)

    setPersonnages((etatPrec) => [...etatPrec, nouvPerso])
  }

  return (
    <>
      <VuePersonnage
        personnages={personnages}
        ajouterPersonnage={ajouterPersonnage}
      />
      <ExpoStatusBar style="auto" />
    </>
  )
}
