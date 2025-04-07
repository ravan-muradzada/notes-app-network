document.getElementById('delete-note-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('note-id').value;

    const response = await fetch(`/delete-note/${id}`, {
        method: 'DELETE'
    });

    const responseDiv = document.getElementById('response');
    if (response.ok) {
        responseDiv.innerHTML = 'Note deleted successfully!';
    } else {
        responseDiv.innerHTML = 'Failed to delete note!';
    }
});
