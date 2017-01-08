const fs = require( 'fs' );
const path = require( 'path' );
const process = require( "process" );
const exec = require('child_process').exec;


const location =".";
const promiseList = [];
fs.readdir( location,( err, files ) => {
        if( err ) {
            console.error( "Could not list the directory.", err );
            process.exit( 1 );
        }
        files.forEach(( file, index ) => {
                var fromPath = path.join( location, file );
                if(fromPath.indexOf(".App.") > -1) {
                       exec('start cmd.exe /K npm install', {cwd:fromPath});   
                }             
        });
});