import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Card, Text } from 'react-native-paper'

const InfoPersonnage = ({ personnage }) => {
  const {
    id,
    nom,
    avatar_url: avatarUrl,
    espece,
    occupation,
    meilleur_ami: meilleurAmi,
    phrase_culte: phraseCulte,
  } = personnage

  const LeftContent = () => <Image source={avatarUrl} style={styles.avatar} />

  console.log({ nom })

  return (
    <Card style={styles.container}>
      <Card.Title title={nom} subtitle={phraseCulte} left={LeftContent} />
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
