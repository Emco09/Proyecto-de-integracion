const http=require("http");
http.createServer((req,res) => {
    if(req.url.includes("rickandmorty/character")){
    let id =req.url.split("/".at(-1));
    let characterFilter = Characters.filter(char => char.id === Number(id))
    res.writeHead(200({"Content-type": "application/json"})).end(JSON.stringify(characterFilter));     

    }

}).listen(3001,"localhost")