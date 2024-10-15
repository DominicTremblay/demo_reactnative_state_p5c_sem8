import React from 'react'

import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native'
import InfoPersonnage from '../composants/Info-personnage.component'
import { Searchbar } from 'react-native-paper'
import AjoutPersonnage from '../composants/Ajout-personnage.component'

const VuePersonnage = ({ personnages, ajouterPersonnage }) => {

 

  const perso = personnages[personnages.length - 1]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <InfoPersonnage personnage={perso} />
      </View>
      <AjoutPersonnage ajouterPersonnage={ajouterPersonnage} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'lightblue',
  },
  search: {
    padding: 16,
    backgroundColor: 'lightgrey',
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'lightcoral',
  },
})

export default VuePersonnage
