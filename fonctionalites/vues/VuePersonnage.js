import React from 'react';
import { StyleSheet, View } from 'react-native';
import CartePersonnage from '../composants/CartePersonnage';

const VuePersonnage = ({ personnages }) => {
  const listePersonnages = personnages.map((perso) => (
    <CartePersonnage
      key={perso.id}
      nom={perso.nom}
      espece={perso.espece}
      occupation={perso.occupation}
      meilleurAmi={perso.meilleur_ami}
      phraseCulte={perso.phrase_culte}
    />
  ));

  const [perso] = personnages;

  return (
    <View>
      <CartePersonnage
        nom={perso.nom}
        espece={perso.espece}
        occupation={perso.occupation}
        meilleurAmi={perso.meilleur_ami}
        phraseCulte={perso.phrase_culte}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default VuePersonnage;
