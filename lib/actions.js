import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "../utils/auth/initFirebase";
import { useUser } from "../utils/auth/useUser";

export const deleteFavourite = async (fav) => {
  initFirebase();
  if (firebase.auth().currentUser) {
    const userId = firebase.auth().currentUser.uid;
    let userFavs = await firebase
      .firestore()
      .collection("favs")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          if (doc.data().fav.idDrink === fav.idDrink) {
            console.log(doc.id, "=>", doc.data());
            doc.ref.delete().then(console.log("deleted " + fav.strDrink));
          }
        });
      })
      .catch((error) => {
        console.error("Error deleting document: ", error);
      });
  } else {
    console.log("There is no current user");
  }
};

export const addFavourite = (fav) => {
  initFirebase();
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
    console.log("There is no current user");
  }
};

//This sets up the listener to fetch data.
//This pulls back an initial 50 posts but also sets
//a listener so as new entries fill in they are added to the top.
export const getFavourites = async () => {
  initFirebase();
  if (firebase.auth().currentUser) {
    let favs = [];
    const userId = firebase.auth().currentUser.uid;
    let userFavs = await firebase
      .firestore()
      .collection("favs")
      .where("user", "==", userId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          favs.push(doc.data().fav);
        });
        console.log(favs);
        return favs;
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
    return userFavs;
  }
};
