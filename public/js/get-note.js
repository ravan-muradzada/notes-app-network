const urlParams = new URLSearchParams(window.location.search);
const noteId = urlParams.get('id');

async function loadNoteDetails() {
    const response = await fetch(`/get-note/${noteId}`);
    const data = await response.json();

    const noteDetails = document.getElementById('note-details');
    if (data.note) {
        noteDetails.innerHTML = `
            <div id="note-title">${data.note.title}</div>
            <div id="note-content">${data.note.content}</div>
        `;
    } else {
        noteDetails.innerHTML = 'Note not found.';
    }
}

loadNoteDetails();
