export function NotesPage(){
  return (
    <div>
        <h1>Insights</h1>
        <div>
            <input type="text" placeholder="Title" value={title} />
            <input type="text" placeholder="Content" value={content} />
            <button>Add</button>
        </div>

        <div>
            {notes.map((note) => (
                <div key={note.id}>
                    <h2>{note.title}</h2>
                    <p>{note.content}</p>
                    <button>Delete</button>
                </div>
            ))}
        </div>
    </div>
  );
};

