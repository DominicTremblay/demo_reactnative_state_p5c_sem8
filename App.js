import { useState } from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import PersonnageVue from './fonctionalites/personnages/vues/Personnage.vue'
import { listePersonnages } from './data/personnages'

export default function App() {
  const [personnages, setPersonnages] = useState(listePersonnages)

  const ajouterPersonnage = ({
    nom,
    avatarUrl,
    espece,
    occupation,
    meilleurAmi,
    phraseCulte,
  }) => {
    const nouvPerso = {
      nom,
      avatar_url: {uri: avatarUrl},
      espece,
      occupation,
      meilleur_ami: meilleurAmi,
      phrase_culte: phraseCulte,
    }

    // ajouter le personnage a l'etat
    setPersonnages((etatCourant) => [...etatCourant, nouvPerso])
  }

  return (
    <>
      <PersonnageVue
        personnages={personnages}
        ajouterPersonnage={ajouterPersonnage}
      />
      <ExpoStatusBar style="auto" />
    </>
  )
}
