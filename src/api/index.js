import createFetcherJson from './fetcher';
import config from '../config';

const fetcher = createFetcherJson(window.fetch);
const { endpoint } = config;

const createApi = apiEndpoint => ({
  get: searchParams => fetcher(`${apiEndpoint}?${searchParams}`),
});

export default createApi(endpoint);
