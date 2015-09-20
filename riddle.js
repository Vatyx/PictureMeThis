Riddles = new Mongo.Collection("Riddle");

if(Meteor.isServer && Riddles.find().count() === 0)
{
	Riddles.insert(
	{
		riddleBody: "What comes down but never goes up",
		riddleTags: ["t", "e"]
	});
}