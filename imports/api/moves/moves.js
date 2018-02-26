import { Mongo } from "meteor/mongo";

const Moves = new Mongo.Collection("moves");

Meteor.methods({
  "move.add": (name, value, type, userId, user) => {
    Moves.insert({
      name,
      value,
      type,
      owner: userId,
      createdAt: new Date()
    });
  },

  "move.battleuse": (id, status) => {
    Moves.update(id, {
      $set: { battleUsed: !status }
    });
  },

  "move.resetBattle": id => {
    Moves.update(
      { owner: id },
      {
        $set: { battleUsed: false }
      },
      {
        multi: true
      }
    );
  }
});

export default Moves;
