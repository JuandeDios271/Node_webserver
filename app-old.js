
const http = require('http');

http.createServer( (req, res) => {
    console.log(req);

    res.writeHead(200);

    res.write('404 | Page no found');
    res.end();

})
.listen( 8080 );

console.log('ESCUANDO  EL PUERTO', 8080);