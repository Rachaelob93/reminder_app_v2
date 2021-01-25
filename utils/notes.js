const fs = require("fs");
const chalk = require("chalk");


const addNote = (myNote) => {
     const allNotes = loadNotes()
     allNotes.push({reminder: myNote});
     console.log(`
     Added a new note: ${myNote}
     `);
    saveNotes(allNotes)
};

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("src/notes.json");
        const notesJson = dataBuffer.toString();
        console.log(notesJson)
        return JSON.parse(notesJson);
    } catch (error) {
        console.log(error);
        return [];
    }
};

const saveNotes = (allNotes) => {
    const notesJson = JSON.stringify(allNotes);
    fs.writeFileSync("src/notes.json", notesJson);
};


const listNotes = () => {
    const allNotes = loadNotes();
    console.log(allNotes)
    allNotes.map((note, index) => {
        console.log(`${index + 1}. ${note.reminder}`);
    });
};

const removeNote = (noteToDelete) => {
    const allNotes = loadNotes();

    try {
        const removedItem = allNotes.splice(noteToDelete - 1, 1);
        console.log(`
        Successfully removed ${removedItem[0].reminder}
        `)
    }   catch (error) {
        console.log("number out of range");
    }

    const notesToKeep = allNotes.filter((note) => {
        return note.reminder != noteToDelete;
    });
    saveNotes(notesToKeep);
};



module.exports = {
    addNote,
    listNotes,
    removeNote
};