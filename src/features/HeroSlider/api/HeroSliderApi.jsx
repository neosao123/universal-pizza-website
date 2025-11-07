import httpClient from "../../../services/httpClient";



export const HeroSliderApi = {
  getherosliderData: async () => {
    try {
      const response = await httpClient.get("/dynamic-slider/web");
      return response.data;
    } catch (err) {
      throw err.response?.data || { message: "Failed to fetch footer data" };
    }
  },
};
