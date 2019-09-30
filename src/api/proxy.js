import config from '../config';

const { proxy } = config;
// use fetch proxy to solve CORS problems
const fetchProxy = fetcher => params => {
  const { endpoint } = params;

  return fetcher({
    ...params,
    endpoint: `${proxy}${endpoint}`,
  }).catch(() => {
    throw new Error('Proxy unavailable');
  });
};

export default fetchProxy;
