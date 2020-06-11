export default async (...args) => {
  const res = await fetch(...args);
  console.log("i was called");
  console.log(res);
  return res.json();
};
