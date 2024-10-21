import { useState } from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import PersonnageVue from './fonctionalites/personnages/vues/Personnage.vue'
import { listePersonnages } from './data/personnages'
import { Provider as PaperProvider } from 'react-native-paper'



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
      avatar_url: { uri: avatarUrl },
      espece,
      occupation,
      meilleur_ami: meilleurAmi,
      phrase_culte: phraseCulte,
    }

    // ajouter le personnage a l'etat
    setPersonnages((etatCourant) => [...etatCourant, nouvPerso])
  }

  const modifierPersonnage = ({
    id,
    nom,
    espece,
    occupation,
    meilleurAmi,
    phraseCulte,
  }) => {
    const persoMAJ = {
      nom,
      espece,
      occupation,
      meilleur_ami: meilleurAmi,
      phrase_culte: phraseCulte,
    }

    console.log(persoMAJ)
    console.log({ id })
    // PArcourir la liste de personnages
    // si c'est meme id > le remplacer pour persoMAJ
    // map : parcourir les elements de la liste un par un et appliquer une transformation sur chacun
    // si c'est le meme id on change le perso, sinon on le laisse intacte

    const nouvListePersonnages = personnages.map((perso) => {
      if (perso.id === id) {
        return persoMAJ
      }
      return perso
    })

    // const nouvListePersonnages = []

    // for (let perso of listePersonnages) {
    //   console.log('PersoId:', perso.id, 'id:', id)

    //   if (perso.id === id) {
    //     console.log('meme Id')
    //     nouvListePersonnages.push(persoMAJ)
    //   } else {
    //     nouvListePersonnages.push(perso)
    //   }
    // }

    // mettre a jour l'etat

    setPersonnages(() => nouvListePersonnages)
  }

  const effacerPersonnage = (id) => {
    // Effacer le personnage de la liste avec l'id correspondant

    const nouvListePersonnages = personnages.filter((perso) => perso.id != id)

    // const nouvListePersonnages = []

    // for (let perso of personnages) {
    //   if (perso.id != id) {
    //     nouvListePersonnages.push(perso)
    //   }
    // }

    // mettre a jour l'etat

    setPersonnages(() => nouvListePersonnages)
  }

  return (
    <PaperProvider>
      <PersonnageVue
        personnages={personnages}
        ajouterPersonnage={ajouterPersonnage}
        effacerPersonnage={effacerPersonnage}
        modifierPersonnage={modifierPersonnage}
      />
      <ExpoStatusBar style="auto" />
    </PaperProvider>
  )
}
