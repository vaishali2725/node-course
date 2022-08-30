//const fs = require('fs'); // fs = File System
//fs.writeFileSync('notes.txt', 'My name is vaishali'); // create new file
//fs.appendFileSync('notes.txt', ". I am a Software Engineer"); // create/append to file

// const getNotes = require('./notes.js');
// const msg = getNotes();
// console.log(msg);

// const validator = require('validator');
// console.log(validator.isEmail('vaishali@gmail.com'));

// import chalk from 'chalk';
// console.log(chalk.red.bold('Error!'));

// const command = process.argv[2];
// console.log(command);


//import fs from 'fs';
// const note = {
//     name:'vaishali',
//     planet:'Earth',
//     age:28
// }

//const noteJson = JSON.stringify(note);
//fs.writeFileSync('1-json.json', noteJson);

// const jsonOutput = fs.readFileSync('1-json.json');
// const output = JSON.parse(jsonOutput.toString());
// console.log(output.name);

// output.name = 'Nilesh';
// output.age = 30;

// fs.writeFileSync('1-json.json', JSON.stringify(output));


import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import * as notes from './notes.js';
yargs(hideBin(process.argv)).command({
    command:'add',
    description:'Add a new note',
    builder:{
        'title':{
            description:"Note Title",
            demandOption:true,
            type:'string'
        },
        'body':{
            description:"Note body",
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);
    }
}).parse();

yargs(hideBin(process.argv)).command({
    command:'remove',
    description:'remove a note',
    builder:{
        'title':{
            description:"Note Title",
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
}).parse();

yargs(hideBin(process.argv)).command({
    command:'list',
    description:'List of Notes',
    handler: function(argv){
        notes.listNotes();
    }
}).parse();

yargs(hideBin(process.argv)).command({
    command:'read',
    description:'Find a Note',
    builder:{
        'title':{
            description:'title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title);
    }
}).parse();