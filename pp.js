const loction = require('./loction/loction.js');
const temp = require('./temp/temp.js');
const rgv = require('yargs').options({
	direccion: {
		alias: 'd',
		desc: 'e reuiere l direccion de u ubiccion',
		demand: true
	}
})
.help()
.argv;

let getInfo = async (direccion) => {

	try{
		let coor = await loction.getLtLgn(direccion);
	    let tempe = await temp.gettemp(coor.lat, coor.lng);
	    
	    console.log(`L direccion ${coor.direccion} tiene un tempertur ctul de ${tempe}`);
	}catch(e){
		return `No c pudo determinr el clim en ${direccion}`;
	}	
}

getInfo(rgv.direccion)
    .then(rep => console.log(rep))
    .catch(e => console.log('Error', e));



