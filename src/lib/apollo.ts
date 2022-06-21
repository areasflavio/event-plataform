import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const API_URI = import.meta.env.VITE_API_CONTENT_URL || '';

export const client = new ApolloClient({
  uri: API_URI,
  cache: new InMemoryCache()
});