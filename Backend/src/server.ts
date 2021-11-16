const express = require( "express" );
const app = express();
const port = 8080; // default port to listen


const helloWorld = "Hello World";

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send(helloWorld);
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );