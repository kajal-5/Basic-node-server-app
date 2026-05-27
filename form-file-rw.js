const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    if(req.url === '/')
    {
        res.writeHead(200,{'content-Type':'text/html'});
        res.write(`
            <html>
                <body>
                    <h1>User form</h1>
                    <form action ="/submit" method="POST">
                        <input
                            type="text"
                            name="useremail"
                            placeholder="EnterEmail"

                        />
                        <br></br>
                        <br></br>
                       <input
                            type="text"
                            name="username"
                            placeholder="EnterName"

                        />
                        <br></br>
                        <br></br>
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }
    if(req.url === '/submit' && req.method==="POST")
    {
        const body=[];
        req.on("data", (chunk)=>{
            body.push(chunk);
        })
        req.on( 'end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            const params = new URLSearchParams(parseBody);
            const userData={
                username: params.get('username'),
                email:params.get('useremail'),
            };
            fs.readFile('user.txt' , 'utf8' , (err,data)=>{
                let users = [];
                if(!err && data)
                {
                    users = JSON.parse(data);
                }
                users.push(userData);
                fs.writeFile(
                        'user.txt',
                        JSON.stringify(users,null,2),
                        (err)=>{
                        if(err){
                            console.log(err);
                        }
                        res.writeHead(302,{Location :'/'});
                        res.end();
                        }
                );
            });
        });
        return ;
    }
});


server.listen(4000, ()=>{
    console.log('Server running on port 4000');
});