import { request } from 'graphql-request';

import { API_URL } from './config.json';

export const useFetch = async (query, url = API_URL) => await request(url, query)