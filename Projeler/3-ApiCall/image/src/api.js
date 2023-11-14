import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    // veri çekmeye yarıyor bu kısım
    headers: {
      Authorization: "Client-ID LNHXtxriDtPMyQJzVBJrCgN4r1jv_OBqmTEu1bxI9Xk",
    },
    params: {
      query: term,
    },
  });
  debugger;
  return response.data.results;
};
export default searchImages;
