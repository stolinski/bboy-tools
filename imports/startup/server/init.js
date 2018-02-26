import { createApolloServer } from "meteor/apollo";
import "../../api/moves/moves";
import { schema } from "./registerApi";

createApolloServer({ schema });
