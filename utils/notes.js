

const fs = require("fs");


const addNote = (myNote) => {
     const allNotes = loadNotes()
     allNotes.push({reminder: myNote})
     console.log(`
     Added a new note: ${myNote}
     `);
    saveNotes(allNotes)
};

const loadNotes = () => {
    try{
        const dataBuffer = fs.readyFileSync("src/notes.json");
        const notesJson = dataBuffer.toString();
        return JSON.parse(notesJson);
    } catch (error) {
        return [];
    }
};

const saveNotes = allNotes => {
    const notesJson = JSON.stringify(allNotes);
    fs.writeFileSync("src/notes.json", notesJson);
};


const listNotes = () => {
    const allNotes = loadNotes();
    allNotes.map((note, index) => {
        console.log(`${index + 1}. ${note.reminder}`);
    });
};

const removeNote = (noteToDelete) => {
    const allNotes = loadNotes();

    try {
        const removedItem = allNotes.splice(noteToDelete - 1, 1)
        console.log(`
        Successfilly removed ${removedItem[0].reminder}
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