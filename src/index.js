const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const port = 3000;

const notes = [];
let id = 1;
// id, title, content

app.post('/create-note', (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = {
            id, title, content
        };
        notes.push(newNote); 
        id++;

        res.status(201).json({ newNote });
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: 'Error occurred!' });
    }
})

app.get('/get-notes', (req, res) => {
    try {
        res.status(200).json({ notes });
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: 'Error occurred!' });
    }
})

app.get('/get-note/:id', (req, res) => {
    try {
        const inputId = parseInt(req.params.id); 
        const note = notes.find(note => note.id === inputId);

        if (!note) {
            res.status(404).json({ error: 'Note not found!' });
        }

        res.status(200).json({ note });
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: 'Error occurred!' });
    }
})

app.patch('/update-note/:id', (req, res) => {
    try {
        const inputId = parseInt(req.params.id); 
        const note = notes.find(note => note.id === inputId);

        if (!note) {
            return res.status(404).send('Note not found!');
        }

        const { title, content } = req.body;

        if (title && typeof title === 'string') note.title = title; 
        if (content && typeof content === 'string') note.content = content; 

        res.status(200).send('Note updated successfully!');
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Error occurred while updating the note!');
    }
});

app.delete('/delete-note/:id', (req, res) => {
    try {
        const inputId = parseInt(req.params.id); 
        const index = notes.findIndex(note => note.id === inputId);

        if (index === -1) {
            return res.status(404).send('Note not found!');
        }

        notes.splice(index, 1); 
        res.status(200).send('Note deleted successfully!');
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Error occurred while deleting the note!');
    }
});

app.listen(port, () => console.log(`Server started at http://localhost:3000`));
