import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { DeleteNote } from "../../delete-note";
import { ModalContent } from "../../modal-content";
import { styles } from "../styles";

interface TriggeredContentProps {
  note: {
    id: string;
    date: Date;
    content: string;
  };

  deleteNote: (id: string) => void;
}

export function TriggeredContent({ note, deleteNote }: TriggeredContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.dialogOverlay} />
      <Dialog.Content className={styles.dialogContent}>
        <Dialog.Close className={styles.dialogClose}>
          <X className={styles.x} />
        </Dialog.Close>
        <div className={styles.modalContentDiv}>
          <ModalContent note={note} />
        </div>
        <DeleteNote note={note} deleteNote={deleteNote} />
      </Dialog.Content>
    </Dialog.Portal>
  );
}
