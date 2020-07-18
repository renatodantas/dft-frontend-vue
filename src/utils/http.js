import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000,
});

/**
 * Invoca uma requisição GET.
 *
 * @param {string} api - enpoint a ser invocado
 * @param {object} [queryParams] - query parameters via chave-valor
 */
export const httpGet = (api, queryParams) => instance.get(api, { params: queryParams });

/**
 * Invoca uma requisição POST.
 *
 * @param {string} api - enpoint a ser invocado
 * @param {object} data - dados a serem enviados no corpo da requisição
 */
export const httpPost = (api, data) => instance.post(api, { ...data });

/**
 * Invoca uma requisição PUT.
 *
 * @param {string} api - enpoint a ser invocado
 * @param {object} data - dados a serem enviados no corpo da requisição
 */
export const httpPut = (api, data) => instance.put(api, { ...data });

/**
 * Invoca uma requisição DELETE.
 *
 * @param {string} api - enpoint a ser invocado
 */
export const httpDelete = (api) => instance.delete(api);
