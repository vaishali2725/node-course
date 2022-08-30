import fs from 'fs';
import chalk from 'chalk';
import { title } from 'process';

export const addNote = (title, body) => {
    const notes = loadNotes();
    // const notesDuplicate = notes.filter(function(note){
    //     return note.title == title;
    // });
    const notesDuplicate = notes.filter( (note) => note.title === title );

    if(notesDuplicate.length <= 0 ){
        notes.push({title:title, body:body});
        saveNotes(notes);
        console.log(chalk.green.inverse(title + ' added'));
    }else{
        console.log(chalk.red.inverse('Duplicate Note'));
    }
}

export const loadNotes = () => {
    try{
        const data = fs.readFileSync('notes.json');
        return JSON.parse(data.toString());
    }
    catch{
        return [];
    }
}

export const removeNote = (title) => {
    try{
        const notes = loadNotes();
        const notesDuplicate = notes.filter((note) => {
            return note.title !== title;
        });
        saveNotes(notesDuplicate);
        console.log(chalk.red.inverse(title + ' removed'));
    }
    catch{
        return 'Error!';
    }
}

export const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue('Your Notes...'));
    notes.forEach(note => {
        console.log(note.title);
    });
}

export const readNote = (title) => {
    const notes = loadNotes();
    const searchNote = notes.find( (note) => note.title == title );
    if(searchNote){
        console.log(chalk.green('title:' + searchNote.title + ' body:'+searchNote.body));
    }else{
        console.log(chalk.red('No note found'));
    }
}

const saveNotes =  function(notes){
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}