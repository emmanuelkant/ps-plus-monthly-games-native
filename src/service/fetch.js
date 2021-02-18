import { request } from 'graphql-request';

import { API_URL } from './config.json';

export const useFetch = async (query, variables) => {
  try {
    return await request(API_URL, query, variables);
  } catch (e) {
    return { error: e };
  }
}