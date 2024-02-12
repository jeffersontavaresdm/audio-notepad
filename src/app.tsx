import React, { ChangeEvent } from "react";
import { toast } from "sonner";
import logo from "./assets/Logo.svg";
import { Divisor } from "./components/divisor";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";
import styles from "./styles";

interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [search, setSearch] = React.useState<string>("");
  const [notes, setNotes] = React.useState<Note[]>(() => {
    let notesOnStorage = localStorage.getItem("notes");

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }

    return [];
  });

  function addCard(note: Note) {
    let noteArray = [note, ...notes];

    setNotes((prevState) => [note, ...prevState]);

    localStorage.setItem("notes", JSON.stringify(noteArray));
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function onNoteDelete(id: string) {
    let newNotes = notes.filter((note) => note.id !== id);

    setNotes(newNotes);

    localStorage.setItem("notes", JSON.stringify(newNotes));

    toast.info("Nota apagada!");
  }

  const filteredNotes =
    search !== "" ? notes.filter((note) => note.content.toLocaleLowerCase().includes(search)) : notes;

  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <form className={styles.formStyles}>
        <input className={styles.inputStyles} type="text" placeholder="Busque suas notas" onChange={handleSearch} />
      </form>
      <Divisor />
      <div className={styles.gridStyles}>
        <NewNoteCard addCard={addCard} />

        {filteredNotes.map((note) => {
          return <NoteCard key={note.id} note={note} deleteNote={onNoteDelete} />;
        })}
      </div>
    </div>
  );
}
