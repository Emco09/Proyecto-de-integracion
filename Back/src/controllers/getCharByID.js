const axios = require("axios");

const KEY = "05c2e55b1919.53c29bd1b6d3b88844c8"
const URL = "https://be-a-rym.up.railway.app/api";


const getCharByID = (res,id) => {
    axios.get(`${URL}/character/${id}`).then((response) =>{
        const {id,image,name,gender,species}= response.data;
        res.witeHead(200,{"Content-Type": "aplicatioon/json"})
        res.end({id,image,name,gender,species})
    })
    .cath(error=>{
        res.writeHead(500,{"Content-Type":"text-type"});
        res.end(error.message);
    })    
      
}
module.export = getCharByID;