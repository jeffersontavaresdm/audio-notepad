import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { styles } from "./styles";

interface ModalContentProps {
  note: {
    date: Date;
    content: string;
  };
}

export const ModalContent = ({ note }: ModalContentProps) => {
  const createMarkup = () => {
    return { __html: note.content };
  };

  return (
    <>
      <span className={styles.date}>
        {formatDistanceToNow(note.date, {
          locale: ptBR,
          addSuffix: true,
        })}
      </span>
      <p className={styles.text} dangerouslySetInnerHTML={createMarkup()} />
      <div className={styles.gradient} />
    </>
  );
};
