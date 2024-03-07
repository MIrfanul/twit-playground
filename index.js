const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api");

const CONSUMER_KEY = "A2bC4eD6fG8iJOI72mN4oP",
	CONSUMER_SECRET = "R1sT3uV5xY7zA9bC0eD2KW2iJ6kL8mN0oP2rS4uV6wY8zA0";

const main = async (username, password) => {
	const { oauth_token, oauth_token_secret } = await Twitter.xauthLogin({
		CONSUMER_KEY,
		CONSUMER_SECRET,
		username,
		password,
	});

	const client = new TwitterApi({
		CONSUMER_KEY,
		CONSUMER_SECRET,
		oauth_token,
		oauth_token_secret,
	});

	const me = await client.getMyInfo();
	return me;
};

module.exports = main;
