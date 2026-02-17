export const getServices = async () => {
  const res = await fetch("https://api.parvozcompany.uz/servicee");
  console.log(res);
  
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
};
