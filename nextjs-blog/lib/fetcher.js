export default async (...args) => {
  const res = await fetch(...args);
  console.log(res.json());
  return res.json();
};
