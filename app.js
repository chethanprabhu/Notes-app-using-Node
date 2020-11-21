const yargs = require("yargs");
const notes = require("./notes")

yargs.command({
    command: 'add',
    describe: "add a new note",
    builder: {
        title: {
            demandOption: true,
            type: "string"
        },
        body: {
            demandOption: true,
            type: "string"
        }
    },
    handler: function(args) {
        notes.addNote(args.title, args.body)
    }
})

yargs.command({
    command: 'remove',
    describe: "remove a note",
    builder: {
        title: {
            demandOption: true,
            type: "string"
        }
    },
    handler: function(args) {
        notes.removeNote(args.title)
    }
})

yargs.command({
    command: 'loadTitles',
    describe: "loads all notes",
    handler: function() {
        notes.displayTitles();
    }
})

yargs.command({
    command: 'load',
    describe: "loads specified note body",
    builder: {
        title: {
            demandOption: true,
            type: "string"
        }
    },
    handler: function(args) {
        notes.loadNoteBody(args.title);
    }
})

yargs.parse();
