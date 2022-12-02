const fs= require('fs')
const http= require("http");
const PORT = 9999;
const server= http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'Text/Html'});
        res.write("<html><head><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'></head><body class='text-center'><h1>Operations</h1><a href='createfile' class='btn btn-primary'  role='button'> Create File </a> &nbsp<a href='readdata' class='btn btn-primary' role='button'> Read File</a>          <a href='append' class='btn btn-primary'  role='button'>Append File</a>          <a href='deletefile' class='btn btn-primary'  role='button' >Delete File</a><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' crossorigin='anonymous'></script></body></html>")
      
    }
    else if(req.url=="/createfile"){
        if(fs.existsSync("neosoft.txt")){
            res.end("already exists");
        }
        else{
            fs.writeFile('neosoft.txt',"Welcome To Neosoft Technology !", (err)=>{
                if(err) throw err
                else res.end('Yay! File created');
            })
        }
    }
    else if(req.url=="/readdata"){
        if(fs.existsSync("neosoft.txt")){
            let data=fs.readFileSync("neosoft.txt");
            res.end(data.toString());
        }
        else{
            res.end("file is not exists")
        }

    }
    else if(req.url=="/deletefile"){
        if(fs.existsSync("neosoft.txt")){
            if(fs.existsSync("neosoft.txt")){
                fs.unlink("neosoft.txt",(err)=>{
                    if (err) throw err
                    else res.end("file deleted");
                });
            }
        }
        else{
            res.end("file is not exists")
        }

    }
    else if(req.url=="/append"){
        if(fs.existsSync("neosoft.txt")){
            fs.existsSync("neosoft.txt")
                fs.appendFile("neosoft.txt","\nNeosoft is a laeding software devlopment and IT  outsourcing company with 25 years of software  engg excellence.",(err)=>{
                    if (err) throw err
                    else res.end("data Updated");
                });
            
        }
        else{
            res.end("file is not exists")
        }

    }
    else{
        res.end("Invalid Request");
    }
})
server.listen(PORT,(err)=>{
    if(err) throw err
    else{
        console.log(`server work on ${PORT}`)
    }
})
console.log("program End")