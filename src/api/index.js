import createFetcherJson from './fetcher';
import fetchProxy from './proxy';
import config from '../config';

const fetcher = fetchProxy(createFetcherJson(window.fetch));
const { endpoints } = config;

const createApi = apiEndpoints => ({
  getBased: currency => fetcher({ endpoint: `${apiEndpoints.latest}?base=${currency}` }),
});

export default createApi(endpoints);
