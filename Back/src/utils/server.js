const http =require("http");
const data = ("./utils/data")
http.createServer((req,res)=>{
    res.setHeader("acces-control-allow-origin","*")

    const{url}=req;
    if(url.includes("rickandmorty/character/")){
        
    }


}).listen(3001,"localhost");