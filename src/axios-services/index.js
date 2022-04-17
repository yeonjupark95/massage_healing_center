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

export const login = async (username, password) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/login`, {
      username,
      password,
    });
    const { token, message } = data;
    return [token, message];
  } catch (error) {
    console.dir(error);
    throw error;
  }
};

export const fetchUser = async (token) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/users/admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createService = async (
  token,
  { name, description, category, price }
) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/services/add`,
      {
        name,
        description,
        category,
        price,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteService = async (token, serviceId) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/services/${serviceId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateService = async (
  token,
  { serviceId, name, description, category, price }
) => {
  try {
    const { data: service } = await axios.patch(
      `${BASE_URL}/services/${serviceId}`,
      {
        name,
        description,
        category,
        price,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return service;
  } catch (error) {
    console.error(error);
  }
};
