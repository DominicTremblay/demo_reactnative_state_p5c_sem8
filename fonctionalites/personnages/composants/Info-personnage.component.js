import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Avatar, Button, Card, Text, List } from 'react-native-paper'

const InfoPersonnage = ({ personnage } = {}) => {
  const {
    nom,
    avatar_url: avatarUrl,
    espece,
    occupation,
    meilleur_ami: meilleurAmi,
    phrase_culte: phraseCulte,
  } = personnage

  const LeftContent = () => <Image source={avatarUrl} style={styles.avatar} />

  return (
    <>
      <Card elevation={5} style={styles.card}>
        <Card.Title
          title={nom}
          subtitle={phraseCulte}
          left={LeftContent}
          style={{ padding: 10 }}
        />

        <Card.Content>
          <View style={styles.item}>
            <Text variant="bodyMedium" style={styles.label}>
              Espèce:
            </Text>
            <Text variant="bodyMedium">{espece}</Text>
          </View>
          <View style={styles.item}>
            <Text variant="bodyMedium" style={styles.label}>
              Occupation:
            </Text>
            <Text variant="bodyMedium">{occupation}</Text>
          </View>
          <View style={styles.item}>
            <Text variant="bodyMedium" style={styles.label}>
              Meilleur ami:
            </Text>
            <Text variant="bodyMedium">{meilleurAmi}</Text>
          </View>
        </Card.Content>
      </Card>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
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
    width: 100,
  },
})

export default InfoPersonnage
