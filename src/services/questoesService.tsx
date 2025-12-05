import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export function getQuestoes() {
  return axios.get(`${API_URL}/questoes`)
    .then(res => res.data)
    .catch(err => {
      console.error("Erro ao buscar questões:", err);
      return [];
    });
}

export function getQuestao(number?: number) {
  return axios.get(`${API_URL}/questoes`)
    .then(res => res.data[number ?? 0])
    .catch(err => {
      console.error("Erro ao buscar questões:", err);
      return [];
    });
}
