const axios = require('axios');

const gettemp = async (lt, lng) => {

	let rep = axios.get('flt l direccion url de l tempertur');//ui v l direccion url de l tempertur

	return rep.data.main.temp;
}

module.exports = {
	gettemp
}