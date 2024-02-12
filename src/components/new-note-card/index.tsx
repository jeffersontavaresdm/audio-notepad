import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React, { ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";
import { styles } from "./styles";

interface NewNoteCardProps {
  addCard: (value: any) => void;
}

let speechRecognition: SpeechRecognition | null = null;

export function NewNoteCard({ addCard }: NewNoteCardProps) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = React.useState<boolean>(true);
  const [content, setContent] = React.useState<string>("");
  const [isRecording, setIsRecording] = React.useState<boolean>(false);

  function handleStartEditor() {
    setShouldShowOnboarding(false);
  }

  function handleStartRecording() {
    let isSpeechRecognitionAPIAvailable = "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

    if (!isSpeechRecognitionAPIAvailable) {
      alert("API de gravação não suportada pelo navegador!");
      return;
    }

    setIsRecording(true);
    setShouldShowOnboarding(false);

    let SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    speechRecognition = new SpeechRecognitionAPI();

    speechRecognition.lang = "pt-BR";
    speechRecognition.continuous = true;
    speechRecognition.maxAlternatives = 1;
    speechRecognition.interimResults = true;
    speechRecognition.onresult = (event) => {
      let transcription = Array.from(event.results).reduce((text, result) => {
        return text.concat(result[0].transcript);
      }, "");

      setContent(transcription);
    };

    speechRecognition.onerror = (event) => {
      console.error(event);
    };

    speechRecognition.start();
  }

  function handleStopRecording() {
    setIsRecording(false);
    speechRecognition?.stop();
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    let value = event.target.value;

    setContent(value);

    event.target.value === "" ? setShouldShowOnboarding(true) : setShouldShowOnboarding(false);
  }

  function handleSaveNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (content === "") {
      return;
    }

    addCard({ id: crypto.randomUUID(), date: new Date(), content: content });

    setContent("");
    setShouldShowOnboarding(true);

    toast.success("Nota criada com sucesso!");
  }

  function clearNote() {
    setIsRecording(false);
    setContent("");
    setShouldShowOnboarding(true);
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.container}>
        <span className={styles.spanStyles}>Adicionar Nota</span>
        <p className={styles.pStyles}>Grave uma nota em áudio que será convertida para texto automaticamente.</p>
        <div className={styles.gradientStyles} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />
        <Dialog.Content className={styles.dialogContent}>
          <Dialog.Close onClick={clearNote} className={styles.dialogClose}>
            <X className={styles.x} />
          </Dialog.Close>
          <form className={styles.form}>
            <div className={styles.modalContentDiv}>
              <span className={styles.date}>Adicionar uma nota</span>
              {shouldShowOnboarding ? (
                <p className={styles.text}>
                  Comece gravando uma nota em{" "}
                  <button onClick={handleStartRecording} type="button" className={styles.recordNoteButton}>
                    áudio
                  </button>{" "}
                  ou se preferir, apenas{" "}
                  <button type="button" onClick={handleStartEditor} className={styles.recordNoteButton}>
                    texto
                  </button>
                  .
                </p>
              ) : (
                <textarea autoFocus className={styles.textArea} onChange={handleContentChange} value={content} />
              )}
            </div>
            {isRecording ? (
              <button onClick={handleStopRecording} type="button" className={styles.recording}>
                <div className={styles.recordBullet} />
                Gravando! (Clique para interromper)
              </button>
            ) : (
              <button onClick={(event: any) => handleSaveNote(event)} type="button" className={styles.saveNoteButton}>
                Salvar nota
              </button>
            )}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
