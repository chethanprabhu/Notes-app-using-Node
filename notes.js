const fs = require("fs");

const addNote = (title, body) => {
    var duplicateTitle = false;
    var loadedNotes = loadNotes();
    
    loadedNotes.forEach(element => {
        element.title === title? duplicateTitle = true : null
    });

    if(!duplicateTitle) {
        loadedNotes.push({
            title: title,
            body: body
        })
        fs.writeFileSync("notes.json", JSON.stringify(loadedNotes))
        console.log("Added " + title)
    } else {
        console.log("Title already used!! Please choose another title");
    }

}

const removeNote = (title) => {
    var noteFound = false;
    var loadedNotes = loadNotes();

    loadedNotes.forEach(element => {
        element.title === title? noteFound = true : null
    });

    if(noteFound) {
        for(var i = 0 ; i < loadedNotes.length ; i ++) {
            if(loadedNotes[i].title === title) {
                loadedNotes.splice(i, 1);
            }
        }
        fs.writeFileSync("notes.json", JSON.stringify(loadedNotes))
        console.log("Removed " + title);
    } else {
        console.log("Title not found");
    }
    
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync("notes.json").toString());
    } catch(e) {
        return [];
    }
    
}

const displayTitles = () => {
    var loadedNotes = loadNotes();
    if(loadedNotes.length) {
        for(var i = 0 ; i  < loadedNotes.length ; i++) {
            console.log(i + 1 + " => " + loadedNotes[i].title)
        }
    } else {
        console.log("No titles found")
    }
    
}

const loadNoteBody = (title) => {
    var noteFound = false;
    var loadedNotes = loadNotes();
    for(var i = 0 ; i  < loadedNotes.length ; i++) {
        if(loadedNotes[i].title === title) {
            console.log("Title = " + title);
            console.log("Description = " + loadedNotes[i].body);
            noteFound = true;
            return
        } else {
            noteFound = false;
        }
    }
    noteFound ? null : console.log("Note not found");
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    loadNotes: loadNotes,
    displayTitles: displayTitles,
    loadNoteBody: loadNoteBody
}