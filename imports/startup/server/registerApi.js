import merge from "lodash/merge";
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "../both/typeDefs";

import moveMutations from "imports/api/moves/mutations";
import moveQueries from "imports/api/moves/queries";
import userQueries from "imports/api/user/queries";

const resolvers = merge(moveMutations, moveQueries, userQueries);

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
