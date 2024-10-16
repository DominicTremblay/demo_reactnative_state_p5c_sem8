# Démo - Gérer l'état d'un composant avec React Native

## Étapes

### Étape 1 - App.js 

1. **Créer les composants de base** :  
   - Ajouter deux composants de base dans `App.js` : **Search** et **List**.
2. **Expliquer SafeAreaView** :  
   - Montrer comment **SafeAreaView** empêche le contenu d'empiéter sur la barre de statut (status bar).
3. **Créer des styles inline** :  
   - Ajouter des styles inline pour une première version rapide des composants.
4. **Afficher la barre de statut** :  
   - Démontrer que la `View` par défaut chevauche la barre de statut.

#### 1.1. Ajouter `StatusBar.currentHeight`

- Ajouter `StatusBar.currentHeight` pour que la `View` commence **après** la barre de statut sur Android.

#### 1.2. Utiliser `StyleSheet.create`

- Remplacer les styles inline par des styles créés avec **`StyleSheet.create`** pour une meilleure organisation.

---

### Étape 2 - Créer la vue et le composant **Personnage**

#### 2.1. Créer la structure

- Créer les dossiers et fichiers suivants : 
  - `src/features/personnages/`
  - `src/features/personnages/composants/InfoPersonnage.component.js`
  - `src/features/personnages/vues/Personnage.vue.js`

#### 2.2. Transférer `App.js` vers `Personnage.vue.js`

- Déplacer le contenu de `App.js` dans `Personnage.vue.js`.

#### 2.3. Ajouter SearchBar de React Native Paper

- Intégrer le composant **SearchBar** de **React Native Paper**.

#### 2.4. Importer les personnages dans `App.js`

- Passer les personnages en **props** à la vue `VuePersonnage`.

#### 2.5. Créer le composant **InfoPersonnage**

- Utiliser le composant **Card** de **React Native Paper** dans `InfoPersonnage.component.js`.

#### 2.6. Ajouter **InfoPersonnage** à la vue **VuePersonnage**

---

### Étape 3 - Ajouter le state

#### 3.1. Créer un `useState` dans `App.js`

- Utiliser **`useState`** pour gérer l'état local du composant.

#### 3.2. Démontrer **React DevTools**

- Montrer comment utiliser **React DevTools** pour inspecter l'état et les props.

---

### Étape 4 - Ajouter un formulaire d’ajout de personnage

#### 4.1. Créer le composant `AjoutPersonnage.component.js`

- Créer un composant dédié pour ajouter un nouveau personnage.

#### 4.2. Créer le formulaire

- Ajouter des champs pour **nom**, **avatar_url**, **espèce**, **occupation**, etc.

#### 4.3. Créer la fonction `ajouterPersonnage` dans `App.js`

- Ajouter une fonction dans `App.js` pour gérer l’ajout de nouveaux personnages.

#### 4.4. Gérer la soumission du formulaire

- Ajouter un bouton de soumission et utiliser **`Alert`** pour indiquer le succès ou l’erreur.

---

## Etape 5 - UseReducer

### 5.1. Ajouter useReducer dans App

- Creer `dataReducer`
- changer pour `state.personnages` et `dispatch`

## Notes

- Ajouter un **alias `@assets`** dans la configuration de Babel pour charger facilement les images via `require`.
  ```javascript
  avatar_url: require('@assets/images/avatars/spongebob.png')
  
- Pour les URLs externes, utiliser la syntaxe suivante 

  ```javascript
  avatar_url: { uri: 'https://example.com/avatar.jpg' }
  ```
  - Restructure sous `src` pour une meilleure organisation.