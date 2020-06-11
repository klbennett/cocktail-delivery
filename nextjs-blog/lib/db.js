import admin from "firebase-admin";
var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cocktails-2a4d1.firebaseio.com",
});

export default admin.firestore();
