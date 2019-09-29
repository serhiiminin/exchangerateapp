const { REACT_APP_API_ENDPOINT, REACT_APP_PROXY_ENDPOINT } = process.env;

export default {
  endpoints: {
    latest: `${REACT_APP_API_ENDPOINT}/latest`,
    history: `${REACT_APP_API_ENDPOINT}/history`,
  },
  proxy: REACT_APP_PROXY_ENDPOINT,
};
