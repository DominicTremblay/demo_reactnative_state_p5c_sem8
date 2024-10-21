import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'
import InfoPersonnage from '../composants/Info.personnage.composant'
import AjoutPersonnage from '../composants/Ajout.personnage.composant'
import ModifierPersonnage from '../composants/Modifier.personnage.composant copy'

const PersonnageVue = ({
  personnages,
  ajouterPersonnage,
  effacerPersonnage,
  modifierPersonnage,
}) => {
  const [action, setAction] = useState('ajouter')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <InfoPersonnage
        personnage={personnages[personnages.length - 1]}
        effacerPersonnage={effacerPersonnage}
        setAction={setAction}
      />

      {action === 'ajouter' ? (
        <AjoutPersonnage ajouterPersonnage={ajouterPersonnage} />
      ) : (
        <ModifierPersonnage
          personnage={personnages[personnages.length - 1]}
          modifierPersonnage={modifierPersonnage}
          setAction={setAction}
        />
      )}
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
