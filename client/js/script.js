Meteor.startup(function()
{
	clarifai = new Clarifai({
	accessToken: 'wBqg9F1PuGnJM9ADyE2kiMGVI4B3l8'
	});
	console.log(clarifai);
});


// console.log(Package['vatyx:clarifai'].Clarifai);
// console.log(Package['vatyx:clarifai']);
