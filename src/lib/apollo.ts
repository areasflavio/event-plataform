import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URI = import.meta.env.VITE_API_CONTENT_URL || '';
const API_CREATE_SUBSCRIBER_TOKEN =
  import.meta.env.VITE_API_CREATE_SUBSCRIBER_TOKEN || '';

export const client = new ApolloClient({
  uri: API_URI,
  headers: {
    Authorization: `Bearer ${API_CREATE_SUBSCRIBER_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
