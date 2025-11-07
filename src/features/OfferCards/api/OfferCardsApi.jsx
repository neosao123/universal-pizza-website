import httpClient from "../../../services/httpClient";


export const HeroSliderApi = {
  getOffersData: async () => {
    try {
      const response = await httpClient.get("/home/pizzas");
      return response.data;
    } catch (err) {
      throw err.response?.data || { message: "Failed to fetch offers" };
    }
  },
};