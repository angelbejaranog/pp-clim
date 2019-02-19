const axios = require('axios');

const getLtLng = async direccion => {

    let encode = encodeURI(direccion);
	let rep = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encode}`);    

    if(rep.data.status === 'ZERO_RESULTS'){    	
    	throw new Error(`No hay reultdo pr l direccion ${direccion}`);
    }else{
        let loction = rep.data.results[0];
        let coor = loction.geometry.location;

    	return {
    		direccion: location.formatted_address,
    		lt: coor.lat,
    		lng: coor.lng
    	}
    }
}

module.exports = {
	getLtLng
}




    