// import express from 'express';

const express = require('express'); //equivelent to the import statement above

const server = express(); //creates a server

//request handlers
server.get('/', (req, res) => {
	res.send(`Hello from the server`);
});

//listen for requests in a particular port on localhost
const port = 8000; //localhost:8000
server.listen(port, () => console.log(`\n=== API on port 8000 ===\n`));
