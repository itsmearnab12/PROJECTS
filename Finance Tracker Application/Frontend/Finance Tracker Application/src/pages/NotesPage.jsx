import "./Notespage.css"
import { useEffect, useState } from "react";
import axios from "axios";
import "./Notespage.css";

export function NotesPage() {

    console.log("Notes Page Loaded");

    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // Fetch notes
    useEffect(() => {
        axios
            .get("http://localhost:4000/api/notes", {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res.data);
                setNotes(res.data.notes || []);
            })
            .catch((err) => console.log(err));
    }, []);

    // Add note
    const handleAdd = async () => {
        try {
            const res = await axios.post(
                "http://localhost:4000/api/notes/create",
                { title, content },
                { withCredentials: true }
            );

            setNotes([...notes, res.data.note]);
            setTitle("");
            setContent("");
        } catch (err) {
            console.log(err);
        }
    };

    // Delete note
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:4000/api/notes/${id}`, {
            withCredentials: true,
        });

        setNotes(notes.filter((note) => note._id !== id));
    };

    return (
        <div className="notes-container">
            <h1 className="notes-title">Insights</h1>

            {/* Form */}
            <div className="note-form">
                <input
                    className="note-input"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    className="note-input"
                    type="text"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <button className="add-btn" onClick={handleAdd}>
                    Add
                </button>
            </div>

            {/* Notes */}
            <div className="notes-grid">
                {notes.map((note) => (
                    <div key={note._id} className="note-card">
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>
                        <button
                            className="delete-btn"
                            onClick={() => handleDelete(note._id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
