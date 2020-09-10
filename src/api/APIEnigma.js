import Axios from 'axios';

export const login = async (body) => {
	const res = await Axios.post('/auth/login', body); // send body to '/auth/login' api
	sessionStorage.setItem('token', res.data); //for saving to session storage
	let tok = sessionStorage.getItem('token');
	return tok;
};
