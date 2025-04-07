async function loadNotes() {
    const response = await fetch('/get-notes');
    const data = await response.json();

    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';

    if (data.notes) {
        data.notes.forEach(note => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div><strong>${note.title}</strong></div>
                <div>${note.content}</div>
            `;
            notesList.appendChild(li);
        });
    }
}

loadNotes();
