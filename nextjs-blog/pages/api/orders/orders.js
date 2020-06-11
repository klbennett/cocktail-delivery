const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function handler(req, res) {
  // Get data from your database
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
