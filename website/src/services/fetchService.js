export const fetchService = async (req) => {
  try {
    const response = await fetch(req);
    return response.json();
  } catch (err){
    console.error("Encountered error calling api:", err);
  };
};