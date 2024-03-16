import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { _develop_uri, _production_uri } from "src/shared/constants";

const uriEnv = {
  development: _develop_uri,
  production: _production_uri,
}[process.env.NODE_ENV];

const apolloClient = new ApolloClient({
  uri: uriEnv,
  cache: new InMemoryCache(),
});

export default apolloClient;

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: _develop_uri,
});

export const standAloneClient = (initialState = {}) =>
  new ApolloClient({
    link,
    // XXX Very important to provide the initialState, otherwise the client will replay the query upon loading,
    //  which is useless as the data were already fetched by the server (SSR)
    cache: new InMemoryCache().restore(initialState || {}), // Rehydrate the cache using the initial data passed from the server
  });
