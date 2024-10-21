
export const AJOUTER_PERSO = 'AJOUTER_PERSO'
export const MODIF_PERSO = 'MODIF_PERSO'
export const EFFACER_PERSO = 'EFFACER_PERSON'

// Objectif de cette fonction est de retourne la nouvelle valeur de l'etat
// etat courant => dataReducer => nouvel etat
export const dataReducer = (state, action) => {
  // action est un objet
  // action.type > indiquer quel type d'operation faire (ajouter, modifier, effacer)
  // ex: action = {type: AJOUTER_PERSO, payload: nouvPerso}

  switch (action.type) {
    case AJOUTER_PERSO:
      return {
        personnages: [...state.personnages, action.payload],
      }

    case MODIF_PERSO:
      const nouvListePersonnages = state.personnages.map((perso) => {
        if (perso.id === action.payload.id) {
          return action.payload.persoMAJ
        }
        return perso
      })

      return { personnages: nouvListePersonnages }

    case EFFACER_PERSO:
      // { type: EFFACER_PERSO, payload: { id } }
      return {
        personnages: state.personnages.filter(
          (perso) => perso.id != action.payload.id
        ),
      }

    default:
      throw new Error(`L'action ${action.type} n'est pas reconnue`)
  }
}