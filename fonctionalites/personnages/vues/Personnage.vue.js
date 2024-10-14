import React from 'react'

import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native'
import InfoPersonnage from '../composants/Info-personnage.component'
import { Searchbar } from 'react-native-paper'

const VuePersonnage = ({ personnages }) => {
  // const listePersonnages = personnages.map((perso) => (
  //   <CartePersonnage
  //     key={perso.id}
  //     nom={perso.nom}
  //     espece={perso.espece}
  //     occupation={perso.occupation}
  //     meilleurAmi={perso.meilleur_ami}
  //     phraseCulte={perso.phrase_culte}
  //   />
  // ))

  const [perso] = personnages

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <InfoPersonnage personnage={perso} />
      </View>
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
