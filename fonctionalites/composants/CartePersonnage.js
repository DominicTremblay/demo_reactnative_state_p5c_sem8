import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Avatar, Button, Card, Text, List } from 'react-native-paper';

const CartePersonnage = ({
  nom,
  espece,
  occupation,
  meilleurAmi,
  phraseCulte,
}) => {
  const listeData = {
    espece,
    occupation,
    meilleurAmi,
    occupation,
  };

  return (
    <Card>
      <Card.Title title={nom} subtitle={phraseCulte} />
      <Card.Content>
        <Text variant="titleLarge">Bio</Text>
        {/* <Text variant="bodyMedium">Card content</Text> */}
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default CartePersonnage;
