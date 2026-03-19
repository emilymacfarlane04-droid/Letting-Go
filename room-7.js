document.addEventListener('DOMContentLoaded', () => {
    const notesContainer = document.getElementById('notes-container');
    const addNoteBtn = document.getElementById('add-note-btn');
    const toggleBtn = document.getElementById('toggle-notes');
    const panel = document.getElementById('notes-panel');

    addNoteBtn.addEventListener('click', () => createNote());

    toggleBtn.addEventListener('click', () => {
        panel.classList.toggle('open');
    });

    function createNote(content = '') {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');

        noteDiv.innerHTML = `
            <textarea placeholder="How do you cope with grief?">${content}</textarea>
            <button class="delete-btn">X</button>
        `;

        notesContainer.appendChild(noteDiv);

        const textarea = noteDiv.querySelector('textarea');
        textarea.focus();
        textarea.addEventListener('input', saveNotes);

        noteDiv.querySelector('.delete-btn').addEventListener('click', () => {
            noteDiv.remove();
            saveNotes();
        });

        saveNotes();
    }

    function saveNotes() {
        const notes = [];
        document.querySelectorAll('.note textarea').forEach(t => {
            notes.push(t.value);
        });
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.forEach(text => createNote(text));
    }

    loadNotes();
});

// background musica
  const audioBackground = document.getElementById('audio');

  document.addEventListener('click', () => {
    if (audioBackground.muted) {
      audioBackground.muted = false;
    }
    audioBackground.play();
  }, { once: true });