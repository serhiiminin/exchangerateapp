import createFetcherJson from './fetcher';
import config from '../config';

const fetcher = createFetcherJson(window.fetch);
const { endpoint } = config;

const createApi = apiEndpoint => ({
  getLatest: searchParams => fetcher({ endpoint: `${apiEndpoint}/latest?${searchParams}` }),
  getBased: currency => fetcher({ endpoint: `${apiEndpoint}/latest?base=${currency}` }),
  getHistory: searchParams => fetcher({ endpoint: `${apiEndpoint}/history?${searchParams}` }),
});

export default createApi(endpoint);
