import { styles } from "./styles";

interface DeleteNoteProps {
  note: {
    id: string;
    date: Date;
    content: string;
  };

  deleteNote: (id: string) => void;
}

export function DeleteNote({ note, deleteNote }: DeleteNoteProps) {
  return (
    <button onClick={() => deleteNote(note.id)} type="button" className={styles.deleteNoteButton}>
      Deseja <span className={styles.deleteNoteSpan}>apagar esta nota</span>?
    </button>
  );
}
