import firebase from "../../../lib/db";

export default function orderHandler(req, res) {
  // Get data from database
  firebase
    .collection("orders")
    .get()
    .then((doc) => {
      console.log(doc.data());
      res.json(doc.data());
    })
    .catch((error) => {
      res.json({ error });
    });
}
