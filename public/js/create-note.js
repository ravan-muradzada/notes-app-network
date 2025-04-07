document.getElementById('create-note-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const response = await fetch('/create-note', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
    });

    const data = await response.json();
    const responseDiv = document.getElementById('response');

    if (response.ok) {
        responseDiv.innerHTML = 'Note created successfully!';
    } else {
        responseDiv.innerHTML = 'Failed to create note.';
    }
});
