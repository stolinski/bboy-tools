import { from } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import { createApolloClient, meteorAccountsLink } from "meteor/apollo";
import defaultState from "../both/defaultState";
import stateMutations from "../both/stateMutations";

const cache = new InMemoryCache();
const httpLink = new HttpLink({ uri: Meteor.absoluteUrl("graphql") });

const stateLink = withClientState({
  cache,
  resolvers: stateMutations,
  defaults: defaultState
});
const link = from([stateLink, meteorAccountsLink, httpLink]);

const client = createApolloClient({ link, cache });

client.onResetStore(stateLink.writeDefaults);

export default client;
