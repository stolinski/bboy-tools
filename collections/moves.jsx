// Define a collection to hold our tasks
Moves = new Mongo.Collection("moves");

Meteor.methods({
	'move.add': (name, value, type, userId, user) => {
		Moves.insert({
			name: name,
			value: value,
			type: type,
			owner: userId,
			username: user,      
			createdAt: new Date()
		});	
	},

	'move.battleuse': (id, status) => {
		Moves.update(id, {
		    $set: {battleUsed: !status}
		});
	},

	'move.resetBattle': (id) => {
		Moves.update({owner: id}, {
			$set: {battleUsed: false},
		}, { 
			multi: true
		});
	}
});