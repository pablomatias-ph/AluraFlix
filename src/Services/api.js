import axios from "axios";

const api = axios.create({
  baseURL: "https://678ff09749875e5a1a93e631.mockapi.io",
});

export const getVideos = async () => {
  try {
    const response = await api.get("/video");
    return response.data;
  } catch (error) {
    console.error("Error al cargar los videos", error);
    throw new Error("No se pudieron obtener los videos. REINTENTE.");
  }
};

export const saveVideo = async (video) => {
  try {
    const response = await api.post("/video", video);
    return response.data;
  } catch (error) {
    console.error("Error, no se pudo cargar el video. REINTENTE.", error);
    throw error;
  }
};

export const deleteVideo = async (videoId) => {
  try {
    const response = await api.delete(`/video/${videoId}`);
    return response.data;
  } catch (error) {
    console.error("Error, no se pudo borrar el video. REINTENTE.", error);
    throw error;
  }
};

export const updateVideo = async (videoId, updatedVideo) => {
  try {
    const response = await api.put(`/video/${videoId}`, updatedVideo);
    return response.data;
  } catch (error) {
    console.error("Error, no se pudo actualizar el video. REINTENTE.", error);
    throw error;
  }
};

export default api;
