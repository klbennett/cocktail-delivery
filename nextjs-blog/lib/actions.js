import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "../utils/auth/initFirebase";

export const addFavourite = (fav) => {
  initFirebase();

  console.log(firebase.auth().currentUser);
  if (firebase.auth().currentUser) {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .firestore()
      .collection("favs")
      .add({
        user: userId,
        fav: fav,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log("Successfully added favourite!");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  } else {
    console.log("there is no current user");
  }
};

//This sets up the listener to fetch data.
//This pulls back an initial 50 posts but also sets
//a listener so as new entries fill in they are added to the top.
export const fetchFavs = () => async (dispatch) => {
  firebase
    .firestore()
    .collection("favs")
    .orderBy("timestamp", "desc")
    .limit(50)
    .onSnapshot((snapshot) => {
      let newState = {
        favs: [],
      };

      snapshot.forEach(function (doc) {
        newState.favs.push({
          id: doc.id,
          fav: doc.data().fav,
        });
      });
    });
};
