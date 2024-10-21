import { useReducer, useState } from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import PersonnageVue from './fonctionalites/personnages/vues/Personnage.vue'
import { listePersonnages } from './data/personnages'
import { Provider as PaperProvider } from 'react-native-paper'
import { dataReducer, AJOUTER_PERSO, MODIF_PERSO, EFFACER_PERSO } from './reducers/dataReducer'


export default function App() {
  const [state, dispatch] = useReducer(dataReducer, {
    personnages: listePersonnages,
  })

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
    dispatch({ type: AJOUTER_PERSO, payload: nouvPerso })
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

    dispatch({
      type: MODIF_PERSO,
      payload: {
        id,
        persoMAJ,
      },
    })
  }

  return (
    <PaperProvider>
      <PersonnageVue
        personnages={state.personnages}
        ajouterPersonnage={ajouterPersonnage}
        dispatch={dispatch}
        modifierPersonnage={modifierPersonnage}
      />
      <ExpoStatusBar style="auto" />
    </PaperProvider>
  )
}
