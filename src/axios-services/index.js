import axios from "axios";
const BASE_URL = "/api";

export async function getAPIHealth() {
  try {
    const { data } = await axios.get("/api/health");
    return data;
  } catch (err) {
    console.error(err);
    return { healthy: false };
  }
}

export const fetchCategory = async (category) => {
  try {
    const { data: services } = await axios.get(
      `${BASE_URL}/services/categories/${category}`
    );
    return services;
  } catch (error) {
    throw error;
  }
};