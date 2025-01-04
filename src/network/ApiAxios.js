import axios from "axios";
import config from "../config";

const instance = axios.create({
  baseURL: config.WS_BASE_URL,
});

instance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? token : "";
  config.headers.ContentType = "application/json";
  return config;
});

/* 회원 관리 */
export const getAll = async () => await instance.get("users/");

export const register = async (name, email, password, phone, agency, role) =>
  await instance.post("users/register", {
    name,
    email,
    password,
    phone,
    agency,
    role,
  });

export const confirmRegister = async (id) =>
  await instance.post(`users/confirm/${id}`);

export const forgotPassword = async (email) =>
  await instance.post("users/forgotpassword", { email });

export const confirmReset = async (id, password) =>
  await instance.post(`users/resetpass/${id}`, { password });

export const login = async (email, password) =>
  await instance.post("users/login", { email, password });

export const logout = async (token) =>
  await instance.post("users/logout", { token });

export const edit = async (userID, name, email) =>
  await instance.post("users/edit", { userID, name, email });

/* 주제 관리 */
export const getAllTopics = async (token) =>
  await instance.get("topics", { token });

export const getTopicById = async (token, topicId) =>
  await instance.get(`topics/${topicId}`, { token });

export const createTopic = async (token, topicData) =>
  await instance.post("topics", { token, ...topicData });

export const updateTopic = async (token, topicId, topicData) =>
  await instance.put(`topics/${topicId}`, { token, ...topicData });

export const deleteTopic = async (token, topicId) =>
  await instance.delete(`topics/${topicId}`, { token });

/* 세션 관리 */
export const checkSession = async (token) =>
  await instance.post("/auth/check-session", { token });
