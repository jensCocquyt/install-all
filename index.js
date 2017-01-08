const fs = require( 'fs' );
const path = require( 'path' );
const process = require( "process" );
const exec = require('child_process').exec;

const args = process.argv.slice(2);
const searchFolder = args && args[0];
const searchFor = args && args[1];

const location =searchFolder ? searchFolder: ".";
const promiseList = [];
fs.readdir( location,( err, files ) => {
        if( err ) {
            console.error( "Could not list the directory.", err );
            process.exit( 1 );
        }
        const search = searchFor? searchFor : ".App.";
        console.log (search)
        files.forEach(( file, index ) => {
                var fromPath = path.join( location, file );
                if(fromPath.indexOf(search) > -1) {
                       exec('start cmd.exe /K npm install', {cwd:fromPath});   
                }             
        });
});