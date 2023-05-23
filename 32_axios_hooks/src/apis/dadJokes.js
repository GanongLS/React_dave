import axios from "axios";
const BASE_URL = "https://icanhazdadjoke.com";

export default axios.create({ // create axios instance
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});
