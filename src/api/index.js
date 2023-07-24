const RAPIDAPI_KEY = process.env.REACT_APP_T_API;

export const getPlacesData = async (type, sw, ne) => {
  //   const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  const url = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary?bl_latitude=${sw?.lat}&bl_longitude=${sw?.lng}&tr_longitude=${ne?.lng}&tr_latitude=${ne?.lat}&limit=40&currency=USD&subcategory=hotel%2Cbb%2Cspecialty&adults=1`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

// export const getPlacesData = async (type, sw, ne) => {
//   const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;

//   const options = {
//     params: {
//       bl_latitude: sw?.lat,
//       tr_latitude: ne?.lat,
//       bl_longitude: sw?.lng,
//       tr_longitude: ne?.lng,
//     },
//     headers: {
//       "X-RapidAPI-Key": RAPIDAPI_KEY,
//       "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//     },
//   };
//   try {
//     console.log("fetching: ", URL);
//     const {
//       data: { data },
//     } = await axios.get(URL, options);

//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };
