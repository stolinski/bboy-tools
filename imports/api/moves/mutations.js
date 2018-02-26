import Moves from "./moves";

export default {
  Mutation: {
    addMove(obj, { move }, context = {}) {
      const { userId } = context;
      const { name, value, type } = move;
      const moveId = Moves.insert({
        name,
        value,
        type,
        owner: userId,
        createdAt: new Date()
      });
      return Moves.findOne(moveId);
    },
    deleteMove(obj, args, context) {},
    updateMove(obj, args, context) {}
  }
};
