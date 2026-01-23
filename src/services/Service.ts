import axios from "axios";
import type { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

type HeadersType = Record<string, string>;

export const cadastrarUsuario = async (
  url: string,
  dados: object,
  setDados: Function
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const login = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const buscar = async (
  url: string,
  setDados: Function,
  headers?: HeadersType
) => {
  const config: AxiosRequestConfig = headers ? { headers } : {};
  const resposta = await api.get(url, config);
  setDados(resposta.data);
};

export const cadastrar = async (
  url: string,
  dados: object,
  setDados: Function,
  headers?: HeadersType
) => {
  const config: AxiosRequestConfig = headers ? { headers } : {};
  const resposta = await api.post(url, dados, config);
  setDados(resposta.data);
};

export const atualizar = async (
  url: string,
  dados: object,
  setDados: Function,
  headers?: HeadersType
) => {
  const config: AxiosRequestConfig = headers ? { headers } : {};
  const resposta = await api.put(url, dados, config);
  setDados(resposta.data);
};

export const deletar = async (url: string, headers?: HeadersType) => {
  const config: AxiosRequestConfig = headers ? { headers } : {};
  await api.delete(url, config);
};

export default api;
