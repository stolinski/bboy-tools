import Moves from "./moves";

export default {
  Query: {
    // userMoves(obj, { _id }, context = {}) {
    //   const { userId } = context;
    //   return Moves.find({ owner: userId }).fetch();
    // },
    moves(obj, { _id }, context = {}) {
      const { userId } = context;
      return Moves.find({ owner: userId }).fetch();
    }
  },
  Move: {
    user: (obj, args, context = {}) => context.user
  }
  // Moves: {
  //   moves(obj, { _id }, context = {}) {
  //     const { userId } = context;
  //     return Moves.find({ owner: userId }).fetch();
  //   },
  //   topRock(obj, { _id }, context = {}) {
  //     return obj.filter(item => item.type === "top_rock");
  //   },
  //   goDown(obj, { _id }, context = {}) {
  //     return obj.filter(item => item.type === "go_down");
  //   },
  //   footwork(obj, { _id }, context = {}) {
  //     return obj.filter(item => item.type === "footwork");
  //   },
  //   powerMove(obj, { _id }, context = {}) {
  //     return obj.filter(item => item.type === "power_move");
  //   },
  //   freeze(obj, { _id }, context = {}) {
  //     return obj.filter(item => item.type === "freeze");
  //   },
  //   burner(obj, { _id }, context = {}) {
  //     return obj.filter(item => item.type === "burner");
  //   }
  // }
};
