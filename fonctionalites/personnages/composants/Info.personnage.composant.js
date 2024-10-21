import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Card, Text, Menu, IconButton } from 'react-native-paper'

const InfoPersonnage = ({ personnage, effacerPersonnage, setAction }) => {
  const [visible, setVisible] = useState(false)

  const {
    id,
    nom,
    avatar_url: avatarUrl,
    espece,
    occupation,
    meilleur_ami: meilleurAmi,
    phrase_culte: phraseCulte,
  } = personnage

  const ouvrirMenu = () => setVisible(true)
  const fermerMenu = () => setVisible(false)

  const gererMiseAJour = () => {
    console.log('MAJ')
    setAction(() => 'modifier')
    fermerMenu();
  }

  const gererEffacer = () => {
    console.log('Effacer')
    effacerPersonnage(id)
    fermerMenu();
  }



  const LeftContent = () => <Image source={avatarUrl} style={styles.avatar} />

  const MnuContext = (props) => (
    <Menu
      visible={visible}
      onDismiss={fermerMenu}
      anchor={
        <IconButton {...props} icon="dots-vertical" onPress={ouvrirMenu} />
      }
    >
      <Menu.Item onPress={gererMiseAJour} title="Mise a jour" />
      <Menu.Item onPress={gererEffacer} title="Effacer" />
    </Menu>
  )

  return (
    <Card style={styles.container}>
      <Card.Title
        title={nom}
        subtitle={phraseCulte}
        left={LeftContent}
        right={MnuContext}
      />
      <Card.Content>
        <View style={styles.item}>
          <Text style={styles.label}>Espece: </Text>
          <Text variant="bodyMedium">{espece}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Occupation: </Text>
          <Text variant="bodyMedium">{occupation}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Meilleur ami: </Text>
          <Text variant="bodyMedium">{meilleurAmi}</Text>
        </View>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
  avatar: {
    width: 60,
    height: 60,
  },
  item: {
    flexDirection: 'row',
  },
  label: {
    width: 120,
  },
})

export default InfoPersonnage
