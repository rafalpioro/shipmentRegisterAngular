//Install express server
const express = require('express');
const http = require('http');
const path = require('path');


const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, '/dist/shipment-register-angular-app')));

app.get('*', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/shipment-register-angular-app/index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'))
