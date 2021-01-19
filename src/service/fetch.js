import { request } from 'graphql-request';

import { API_URL } from './config.json';

export const useFetch = async (query, url = API_URL) => {
  try {
    return await request(url, query);
  } catch (e) {
    return { error: e };
  }
}