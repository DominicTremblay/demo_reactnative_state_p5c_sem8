import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'

const AjoutPersonnage = ({ajouterPersonnage}) => {

  console.log("AjoutPersonnage", ajouterPersonnage)
  const [personnage, setPersonnage] = useState({
    nom: '',
    avatarUrl: '',
    espece: '',
    occupation: '',
    meilleurAmi: '',
    phraseCulte: '',
  })

  const gererSoumettre = () => {

    // ajouter au state
    ajouterPersonnage(personnage)

    // Reset du formulaire
    setPersonnage({
      nom: '',
      avatarUrl: '',
      espece: '',
      occupation: '',
      meilleurAmi: '',
      phraseCulte: '',
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Ajouter un nouveau personnage de Bob l'éponge
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={personnage.nom}
        onChangeText={(text) => setPersonnage({ ...personnage, nom: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="URL de l'avatar"
        value={personnage.avatar_url}
        onChangeText={(text) =>
          setPersonnage({ ...personnage, avatarUrl: text })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Espèce"
        value={personnage.espece}
        onChangeText={(text) => setPersonnage({ ...personnage, espece: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Occupation"
        value={personnage.occupation}
        onChangeText={(text) =>
          setPersonnage({ ...personnage, occupation: text })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Meilleur ami"
        value={personnage.meilleurAmi}
        onChangeText={(text) =>
          setPersonnage({ ...personnage, meilleurAmi: text })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Phrase culte"
        value={personnage.phraseCulte}
        onChangeText={(text) =>
          setPersonnage({ ...personnage, phraseCulte: text })
        }
      />

      <Button title="Ajouter le personnage" onPress={gererSoumettre} />
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

export default AjoutPersonnage
