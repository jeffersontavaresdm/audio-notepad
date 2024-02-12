import * as Dialog from "@radix-ui/react-dialog";
import { ModalContent } from "../modal-content/index.tsx";
import { styles } from "./styles.ts";
import { TriggeredContent } from "./triggered-content/index.tsx";

interface NoteCardProps {
  note: {
    id: string;
    date: Date;
    content: string;
  };

  deleteNote: (id: string) => void;
}

export function NoteCard({ note, deleteNote }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.button}>
        <ModalContent note={note} />
      </Dialog.Trigger>
      <TriggeredContent note={note} deleteNote={deleteNote} />
    </Dialog.Root>
  );
}
