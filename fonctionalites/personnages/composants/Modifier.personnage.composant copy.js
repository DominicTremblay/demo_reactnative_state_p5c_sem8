import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, TextInput, Text } from 'react-native-paper'

const ModifierPersonnage = ({ personnage: persoCourant, modifierPersonnage, setAction }) => {
  const [personnage, setPersonnage] = useState({
    id: persoCourant.id,
    nom: persoCourant.nom,
    espece: persoCourant.espece,
    occupation: persoCourant.occupation,
    meilleurAmi: persoCourant.meilleur_ami,
    phraseCulte: persoCourant.phrase_culte,
  })

  const gererSoumettre = () => {

    console.log("Modifier perso")
    // Mettre a jour l etat
    modifierPersonnage(personnage)

    // Reset de la vue

    setAction(() => 'ajouter')

  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Modifier le personnage</Text>

      <TextInput
        placeholder="nom"
        value={personnage.nom}
        onChangeText={(text) => setPersonnage({ ...personnage, nom: text })}
        style={styles.input}
      />

      <TextInput
        placeholder="Espece"
        value={personnage.espece}
        onChangeText={(text) => setPersonnage({ ...personnage, espece: text })}
        style={styles.input}
      />

      <TextInput
        placeholder="occupation"
        value={personnage.occupation}
        onChangeText={(text) =>
          setPersonnage({ ...personnage, occupation: text })
        }
        style={styles.input}
      />

      <TextInput
        placeholder="Meilleur ami"
        value={personnage.meilleurAmi}
        onChangeText={(text) =>
          setPersonnage({ ...personnage, meilleurAmi: text })
        }
        style={styles.input}
      />

      <TextInput
        placeholder="Phrase culte"
        value={personnage.phraseCulte}
        onChangeText={(text) =>
          setPersonnage({ ...personnage, phraseCulte: text })
        }
        style={styles.input}
      />

      <Button mode="outlined" onPress={gererSoumettre}>
        Modifier
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
})

export default ModifierPersonnage
