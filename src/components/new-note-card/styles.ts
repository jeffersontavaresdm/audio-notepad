export const styles = {
  container: `
    rounded-md
    bg-slate-700
    p-5
    gap-3
    relative
    flex
    flex-col
    text-left
    hover:ring-2
    hover:ring-slate-600
    focus:ring-2
    focus:ring-lime-400
    outline-none
  `,

  form: `
    flex-1
    flex
    flex-col
  `,

  spanStyles: `
    text-sm
    font-medium
    text-slate-200
  `,

  pStyles: `
    text-sm
    leading-6
    text-slate-400
  `,

  gradientStyles: `
    absolute
    bottom-0
    left-0
    right-0
    h-1/2
    bg-gradient-to-t
    from-black/60
    to-black/0
    pointer-events-none
  `,

  dialogOverlay: `
    inset-0
    fixed bg-black/60
  `,

  dialogContent: `
    fixed
    inset-0
    md:inset-auto
    md:top-1/2
    md:left-1/2
    md:-translate-x-1/2
    md:-translate-y-1/2
    md:max-w-[640px]
    md:h-[60vh]
    md:rounded-md
    w-full
    bg-slate-700
    flex
    flex-col
    outline-none
    overflow-hidden
  `,

  dialogClose: `
    absolute
    right-0
    top-0
    bg-transparent
    p-1.5
    to-slate-400
    hover:text-red-700
  `,

  modalContentDiv: `
    flex
    flex-1
    flex-col
    gap-3
    p-5
  `,

  x: `
    size-5
  `,

  date: `
    text-sm
    font-medium
    text-slate-200
  `,

  text: `
    text-sm
    leading-6
    text-slate-400
  `,

  saveNoteSpan: `
    text-red-400
    group-hover:underline
  `,

  saveNoteButton: `
    w-full
    bg-lime-400
    py-8
    text-center
    text-sm
    text-lime-950
    outline-none
    font-medium
    hover:bg-lime-500
  `,

  recording: `
    w-full
    bg-slate-900
    py-8
    text-center
    text-sm
    text-slate-350
    outline-none
    font-medium
    hover:text-slate-100
    flex
    items-center
    justify-center
    gap-2
  `,

  recordNoteButton: `
    font-medium
    text-lime-400
    hover:underline
  `,

  textArea: `
    text-sm
    leading-6
    text-slate-400
    bg-transparent
    resize-none
    flex-1
    outline-none
  `,

  recordBullet: `
    size-3
    rounded-full
    bg-red-500
    animate-pulse
  `,
};
