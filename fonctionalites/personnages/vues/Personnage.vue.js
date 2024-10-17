import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'
import InfoPersonnage from '../composants/Info.personnage.composant'
import AjoutPersonnage from '../composants/Ajout.personnage.composant'

const PersonnageVue = ({ personnages, ajouterPersonnage }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <InfoPersonnage personnage={personnages[personnages.length - 1]} />
      <AjoutPersonnage ajouterPersonnage={ajouterPersonnage} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'aliceblue',
    paddingTop: StatusBar.currentHeight,
  },
  search: { padding: 16, backgroundColor: 'lightgrey' },
  list: { flex: 1, padding: 16, backgroundColor: 'lightblue' },
})

export default PersonnageVue
