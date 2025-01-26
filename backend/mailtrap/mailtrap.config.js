const { MailtrapClient } = require("mailtrap");
const dotenv = require("dotenv");

dotenv.config();

const mailtrapClient = new MailtrapClient({
	endpoint: process.env.MAILTRAP_ENDPOINT,
	token: process.env.MAILTRAP_TOKEN,
});

const sender = {
	email: "mailtrap@demomailtrap.com", // put domain if you have one
	name: "Coders Clutch",
};

module.exports = { mailtrapClient, sender };
