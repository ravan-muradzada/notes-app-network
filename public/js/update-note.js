document.getElementById('update-note-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('note-id').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const response = await fetch(`/update-note/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
    });

    const data = await response.json();

    const responseDiv = document.getElementById('response');
    if (response.ok) {
        responseDiv.innerHTML = 'Note updated successfully!';
    } else {
        responseDiv.innerHTML = 'Failed to update note!';
    }
});
